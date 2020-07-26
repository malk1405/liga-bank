import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from './number-input';
import conjugate from '../../utils/conjugate';

function NumberField({
  value,
  min,
  max,
  title,
  step,
  onChange,
  hasError,
  hasAutoCorrection,
  units,
}) {
  const handleBlur = () => {
    if (hasAutoCorrection) {
      if (value < min) {
        onChange(min);
      }
    }
  };

  const handleChange = (newValue) => {
    if (newValue) {
      onChange(Math.min(newValue, max));
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

  return (
    <div>
      <label>{title}</label>
      {step && (
        <button type="button" onClick={decrement}>
          -
        </button>
      )}
      <NumberInput
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      ></NumberInput>
      {conjugate(value, units)}
      {step && (
        <button type="button" onClick={increment}>
          +
        </button>
      )}
    </div>
  );
}

NumberField.defaultProps = {
  increment: {},
  slider: {},
};

export default NumberField;
