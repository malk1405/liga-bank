import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const getNextId = (newId, length) => {
  const id = Number(newId);
  if (id < 0) {
    return length - 1;
  }

  if (id >= length) {
    return 0;
  }

  return id;
};

function Tabs({config, className, Panel, hasAutoChange, hasSwipe}) {
  const [selectedId, setSelectedId] = useState(0);
  const [isDragged, setIsDragged] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);
  const [offset, setOffset] = useState(0);

  const container = useRef(null);

  const handleChange = (e) => {
    setSelectedId(e.target.value);
  };

  const getInteraction = () => {
    setIsInteracted(true);
  };

  const loseInteraction = () => {
    container.current.contains(document.activeElement);
    setIsInteracted(container.current.contains(document.activeElement));
  };

  const onDrag = (type) => {
    return (e) => {
      setIsDragged(true);
      const startX = getX(e);
      const moveEvent = type === `mouse` ? `mousemove` : `touchmove`;
      const endEvent = type === `mouse` ? `mouseup` : `touchend`;

      document.addEventListener(moveEvent, onMove);
      document.addEventListener(endEvent, onEnd);

      function onMove(evt) {
        setOffset(getX(evt) - startX);
      }

      function onEnd() {
        document.removeEventListener(moveEvent, onMove);
        document.removeEventListener(endEvent, onEnd);
        setIsDragged(false);
        setOffset(0);
      }

      function getX(evt) {
        return type === `mouse` ? evt.clientX : evt.touches[0].clientX;
      }
    };
  };

  const onTouchStart = onDrag(`touch`);
  const onMouseDown = onDrag(`mouse`);

  useEffect(() => {
    const interval =
      hasAutoChange && !isInteracted && !isDragged
        ? setInterval(() => {
          setSelectedId((id) => getNextId(id + 1, config.length));
        }, 4000)
        : null;
    return () => {
      clearInterval(interval);
    };
  }, [hasAutoChange, isDragged, isInteracted, config]);

  let nextId = null;
  if (offset > 0) {
    nextId = getNextId(selectedId + 1, config.length);
  } else if (offset < 0) {
    nextId = getNextId(selectedId - 1, config.length);
  }

  const style = isDragged ? {transform: `translateX(${offset}px)`} : null;

  return (
    <div
      className={`${className}__tabs-container`}
      onMouseOver={getInteraction}
      onFocus={getInteraction}
      onMouseLeave={loseInteraction}
      onBlur={loseInteraction}
      ref={container}
    >
      <ul className={`list ${className}__tabs`}>
        {config.map(({title, mod}, id) => (
          <li key={mod} className={`${className}__tab`}>
            <label className={`${className}__label`}>
              <input
                type="radio"
                name={`tab-${className}`}
                className={`visually-hidden ${className}__radio`}
                value={id}
                onChange={handleChange}
                checked={+selectedId === id}
              />
              <span
                className={`${className}__radio-clone ${className}__radio-clone--${mod}${
                  +selectedId === id
                    ? ` ${className}__radio-clone--selected`
                    : ``
                }`}
              ></span>
              <span className={`${className}__title`}>{title}</span>
            </label>
          </li>
        ))}
      </ul>
      <div
        className={`${className}__panel-container`}
        onTouchStart={hasSwipe ? onTouchStart : null}
        onMouseDown={onMouseDown}
      >
        <Panel style={style}>{config[selectedId].content}</Panel>
        {nextId !== null && (
          <Panel mod={[`next`]}>{config[nextId].content}</Panel>
        )}
      </div>
    </div>
  );
}

Tabs.defaultProps = {
  hasAutoChange: false,
  hasSwipe: false,
};

Tabs.propTypes = {
  config: PropTypes.arrayOf(PropTypes.any).isRequired,
  className: PropTypes.string.isRequired,
  Panel: PropTypes.func.isRequired,
  hasAutoChange: PropTypes.bool,
  hasSwipe: PropTypes.bool,
};

export default Tabs;
