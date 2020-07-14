import React from 'react';
import PropTypes from 'prop-types';

function CheckBoxes({config, onChange}) {
  return (
    <ul>
      {config.map(({name, text, checked, id}) => (
        <li key={name}>
          <label>
            <input
              type="checkbox"
              name="name"
              onChange={onChange}
              checked={checked}
              data-id={id}
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
