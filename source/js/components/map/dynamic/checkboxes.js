import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../checkbox/checkbox';

function CheckBoxes({config, onChange}) {
  return (
    <ul className="list map__list">
      {config.map(({name, text, checked, id}) => (
        <li key={name} className={`map__item`}>
          <label>
            <Checkbox
              name={name}
              onChange={onChange}
              checked={checked}
              id={id}
            />
            {text}
          </label>
        </li>
      ))}
    </ul>
  );
}

CheckBoxes.propTypes = {
  config: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        text: PropTypes.string,
        checked: PropTypes.bool,
      })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default CheckBoxes;
