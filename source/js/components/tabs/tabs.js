import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const setNextId = (newId, length) => {
  if (newId < 0) {
    return length - 1;
  }

  if (newId >= length) {
    return 0;
  }

  return newId;
};

function Tabs({config, className, Panel, hasAutoChange, hasSwipe}) {
  const [selectedId, setSelectedId] = useState(0);
  const [isDragged, setIsDragged] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);
  const [startX, setStartX] = useState(0);
  const [curX, setCurX] = useState(0);

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
      setStartX(getX(e));
      setCurX(getX(e));
      const moveEvent = type === `mouse` ? `mousemove` : `touchmove`;
      const endEvent = type === `mouse` ? `mouseup` : `touchend`;

      document.addEventListener(moveEvent, onMove);
      document.addEventListener(endEvent, onEnd);

      function onMove(evt) {
        setCurX(getX(evt));
      }

      function onEnd() {
        document.removeEventListener(moveEvent, onMove);
        document.removeEventListener(endEvent, onEnd);
        setIsDragged(false);
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
          setSelectedId((id) => setNextId(id + 1, config.length));
        }, 4000)
        : null;
    return () => {
      clearInterval(interval);
    };
  }, [hasAutoChange, isDragged, isInteracted, config]);

  const style = isDragged
    ? {transform: `translateX(${curX - startX}px)`}
    : null;

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
          <label key={mod} className={`${className}__label`}>
            <input
              type="radio"
              name={`tab-${className}`}
              value={id}
              onChange={handleChange}
              checked={+selectedId === id}
            />
            <span className={`${className}__radio`}></span>
            <span>{title}</span>
          </label>
        ))}
      </ul>
      <div
        className={`${className}__panel-container`}
        onTouchStart={hasSwipe ? onTouchStart : null}
        onMouseDown={onMouseDown}
      >
        <Panel style={style}>{config[selectedId].content}</Panel>
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
