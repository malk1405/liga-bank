import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import NumberInput from './input';
import conjugate from '../../../utils/conjugate';
import noop from '../../../utils/noop';
import getClasses from '../../../utils/getClasses';
import {block} from '../calculator';

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
  const inputRef = useRef(null);
  const handleChange = (newValue) => {
    if (newValue) {
      onChange(Math.min(newValue, +String(max).replace(/\d/g, `9`)));
    } else {
      onChange(newValue);
    }
  };

  const decrement = (e) => {
    e.stopPropagation();
    onChange(Math.max(min, value - step));
  };

  const increment = (e) => {
    e.stopPropagation();
    onChange(Math.min(max, value + step));
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  const modifiers = [`input`];
  if (hasError) {
    modifiers.push(`error`);
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
        {step && (
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
          onBlur={onBlur}
          inputRef={inputRef}
        ></NumberInput>
        <span>{conjugate(value, units)}</span>
        {step && (
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
};

export default NumberField;
