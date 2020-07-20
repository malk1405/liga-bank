import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Tabs({config, className, Panel}) {
  const [selectedId, setSelectedId] = useState(0);

  const handleChange = (e) => {
    setSelectedId(e.target.value);
  };

  return (
    <div className={`${className}__tabs-container`}>
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

Tabs.propTypes = {
  config: PropTypes.arrayOf(PropTypes.any).isRequired,
  className: PropTypes.string.isRequired,
  Panel: PropTypes.func.isRequired,
};

export default Tabs;
