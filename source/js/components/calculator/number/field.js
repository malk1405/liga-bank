import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import NumberInput from './input';
import conjugate from '../../../utils/conjugate';
import noop from '../../../utils/noop';
import getClasses from '../../../utils/getClasses';
import {block} from '../calculator';

function clamp(num, min, max) {
  if (num <= min) {
    return min;
  }

  if (num >= max) {
    return max;
  }

  return num;
}

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
  errorText,
}) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    onBlur();
    setIsFocused(false);
  };

  const handleChange = (newValue) => {
    if (newValue) {
      onChange(Math.min(newValue, +String(max).replace(/\d/g, `9`)));
    } else {
      onChange(newValue);
    }
  };

  const decrement = (e) => {
    e.stopPropagation();
    onChange(clamp(value - step, min, max));
  };

  const increment = (e) => {
    e.stopPropagation();
    onChange(clamp(value + step, min, max));
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  const modifiers = [`input`];
  if (hasError) {
    modifiers.push(`error`);
  }

  if (isFocused) {
    modifiers.push(`focused`);
  }

  return (
    <React.Fragment>
      <label
        className={getClasses({block, element: `label`})}
        onClick={handleClick}
      >
        {title}
      </label>
      <div
        className={getClasses({block, element: `field`, modifiers})}
        onClick={handleClick}
      >
        {step && value > min && (
          <button
            title="Уменьшить"
            type="button"
            onClick={decrement}
            className={`button ${getClasses({
              block,
              element: `field-button`,
              modifiers: [`dec`],
            })}`}
          >
            <span className="visually-hidden">Увеличить</span>
          </button>
        )}
        <NumberInput
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          inputRef={inputRef}
        ></NumberInput>
        <span>{conjugate(value, units)}</span>
        {step && value < max && (
          <button
            title="Увеличить"
            type="button"
            onClick={increment}
            className={`button ${getClasses({
              block,
              element: `field-button`,
              modifiers: [`inc`],
            })}`}
          >
            <span className="visually-hidden">Уменьшить</span>
          </button>
        )}
        {hasError && errorText && (
          <div className={getClasses({block, element: `field-error`})}>
            {errorText}
          </div>
        )}
      </div>
    </React.Fragment>
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
  errorText: PropTypes.string,
};

export default NumberField;
