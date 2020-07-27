import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from './number-input';
import conjugate from '../../utils/conjugate';
import noop from '../../utils/noop';
import getClasses from '../../utils/getClasses';

const block = `number`;

function NumberField({
  value,
  min,
  max,
  title,
  units,
  step,
  onChange,
  onBlur,
  hasError,
}) {
  const handleChange = (newValue) => {
    if (newValue) {
      onChange(Math.min(newValue, +String(max).replace(/\d/g, `9`)));
    } else {
      onChange(newValue);
    }
  };

  const decrement = () => {
    onChange(Math.max(min, value - step));
  };

  const increment = () => {
    onChange(Math.min(max, value + step));
  };

  const modifiers = hasError ? [`error`] : [];

  return (
    <div className={block}>
      <label>{title}</label>
      <div className={getClasses({block, element: `field`, modifiers})}>
        {step && (
          <button type="button" onClick={decrement}>
            -
          </button>
        )}
        <NumberInput
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
        ></NumberInput>
        {conjugate(value, units)}
        {step && (
          <button type="button" onClick={increment}>
            +
          </button>
        )}
      </div>
    </div>
  );
}

NumberField.defaultProps = {
  min: 0,
  max: Infinity,
  onBlur: noop,
};

NumberField.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  title: PropTypes.string.isRequired,
  units: PropTypes.arrayOf(PropTypes.string),
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  hasError: PropTypes.bool,
};

export default NumberField;
