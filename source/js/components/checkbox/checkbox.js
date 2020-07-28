import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../../../img/svg/inline/checkbox.svg';

function Checkbox({onChange, checked, name, id}) {
  return (
    <React.Fragment>
      <input
        type="checkbox"
        className="visually-hidden checkbox"
        name={name}
        data-id={id}
        onChange={onChange}
        checked={checked || false}
      />
      <SVG className="checkbox-clone"></SVG>
    </React.Fragment>
  );
}

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default Checkbox;
