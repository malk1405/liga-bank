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

function Tabs({config, className, Panel, hasAutoChange}) {
  const [selectedId, setSelectedId] = useState(0);
  const [isInteracted, setIsInteracted] = useState(false);

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

  useEffect(() => {
    const interval =
      hasAutoChange && !isInteracted
        ? setInterval(() => {
          setSelectedId((id) => setNextId(id + 1, config.length));
        }, 4000)
        : null;
    return () => {
      clearInterval(interval);
    };
  }, [hasAutoChange, isInteracted, config]);

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
      <div className={`${className}__panel-container`}>
        <Panel>{config[selectedId].content}</Panel>
      </div>
    </div>
  );
}

Tabs.defaultProps = {
  hasAutoChange: false,
};

Tabs.propTypes = {
  config: PropTypes.arrayOf(PropTypes.any).isRequired,
  className: PropTypes.string.isRequired,
  Panel: PropTypes.func.isRequired,
  hasAutoChange: PropTypes.bool,
};

export default Tabs;
