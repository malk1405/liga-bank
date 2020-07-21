import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function Link({children, href, classes, tabindex, draggable}) {
  const [isDragged, setIsDragged] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const onMouseDown =
    draggable === false
      ? () => {
        setIsPressed(true);
      }
      : null;

  const onClick = isDragged
    ? (e) => {
      e.preventDefault();
    }
    : null;

  useEffect(() => {
    if (isPressed) {
      document.addEventListener(`mousemove`, onMouseMove);
      document.addEventListener(`click`, onClickInner);
    }

    function onMouseMove() {
      setIsDragged(true);
    }

    function onClickInner() {
      setIsPressed(false);
      setIsDragged(false);
    }
    return () => {
      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`click`, onClickInner);
    };
  }, [isPressed, setIsDragged]);

  return (
    <a
      href={href}
      draggable={draggable}
      className={`link ${classes}`.trim()}
      tabIndex={tabindex}
      onClick={onClick}
      onMouseDown={onMouseDown}
    >
      {children}
    </a>
  );
}

Link.defaultProps = {
  href: `#`,
  tabindex: null,
  classes: ``,
  draggable: null,
};

Link.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
  classes: PropTypes.string,
  tabindex: PropTypes.number,
  draggable: PropTypes.bool,
};

export default Link;
