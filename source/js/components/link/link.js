import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Link({children, href, classes, tabindex, draggable}) {
  const [isDragged, setIsDragged] = useState(false);

  const onMouseDown =
    draggable === false
      ? (e) => {
        const startX = e.clientX;
        document.addEventListener(`mousemove`, onMouseMove);

        function onMouseMove(evt) {
          if (evt.clientX !== startX) {
            document.addEventListener(`click`, onClickInner);
            document.removeEventListener(`mousemove`, onMouseMove);
            setIsDragged(true);
          }
        }

        function onClickInner() {
          setIsDragged(false);
          document.removeEventListener(`click`, onClickInner);
        }
      }
      : null;

  const onClick = isDragged
    ? (e) => {
      e.preventDefault();
    }
    : null;

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
