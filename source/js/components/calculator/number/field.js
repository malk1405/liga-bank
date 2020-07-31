import React, {useRef, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import NumberInput from './input';
import conjugate from '../../../utils/conjugate';
import noop from '../../../utils/noop';
import getClasses from '../../../utils/getClasses';
import {block} from '../calculator';
import Increment from './increment';

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

  const updateValue = (e, st) => {
    e.stopPropagation();
    const newValue = clamp(value + st, min, max);
    onChange(newValue);

    if (newValue === min || newValue === max) {
      setFocus();
    }
  };

  const decrement = (e) => {
    updateValue(e, -step);
  };

  const increment = (e) => {
    updateValue(e, step);
  };

  const setFocus = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    setIsFocused(true);
  }, []);

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
        onClick={setFocus}
      >
        {title}
      </label>
      <div
        className={`input ${getClasses({
          block,
          element: `field`,
          modifiers,
        })}`}
        onClick={setFocus}
      >
        {step && value > min && (
          <Increment onClick={decrement} modifiers={[`dec`]}>
            Уменьшить
          </Increment>
        )}
        <NumberInput
          value={value}
          onChange={handleChange}
          onFocus={setFocus}
          onBlur={handleBlur}
          inputRef={inputRef}
        ></NumberInput>
        <span>{conjugate(value, units)}</span>
        {step && value < max && (
          <Increment onClick={increment} modifiers={[`inc`]}>
            Увеличить
          </Increment>
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
