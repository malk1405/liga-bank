import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';

function Tab({block, mod, isSelected, children, onChange, id}) {
  const cloneMod = [...mod];
  if (isSelected) {
    cloneMod.push(`selected`);
  }

  return (
    <label className={getClasses({block, element: `label`})}>
      <input
        type="radio"
        name={`tab-${block}`}
        className={`visually-hidden ${getClasses({block, element: `radio`})}`}
        value={id}
        onChange={onChange}
        checked={isSelected}
      />
      <span
        className={getClasses({
          block,
          element: `radio-clone`,
          modifiers: cloneMod,
        })}
      ></span>
      {children}
    </label>
  );
}

Tab.defaultProps = {
  mod: [],
  isSelected: false,
};

Tab.propTypes = {
  block: PropTypes.string.isRequired,
  mod: PropTypes.arrayOf(PropTypes.string),
  isSelected: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Tab;
