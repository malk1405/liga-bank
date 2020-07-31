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

  const onIncrementDestroy = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

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
          <Increment
            onClick={decrement}
            modifiers={[`dec`]}
            onDestroy={onIncrementDestroy}
          >
            Уменьшить
          </Increment>
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
          <Increment
            onClick={increment}
            modifiers={[`inc`]}
            onDestroy={onIncrementDestroy}
          >
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
