import React, {useState} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';

function Tab({block, mod, isSelected, children, onChange, id, title}) {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const labelMod = [];
  const cloneMod = [...mod];

  if (isFocused) {
    labelMod.push(`focused`);
  }

  if (isSelected) {
    cloneMod.push(`selected`);
    labelMod.push(`selected`);
  }

  return (
    <label
      className={getClasses({block, element: `label`, modifiers: labelMod})}
      aria-label={title}
      title={title}
    >
      <input
        type="radio"
        name={`tab-${block}`}
        className="visually-hidden"
        value={id}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        checked={isSelected}
      />
      <span
        className={getClasses({
          block: `radio-clone`,
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
  title: PropTypes.string
};

export default Tab;
