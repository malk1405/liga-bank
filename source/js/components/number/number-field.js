import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from './number-input';

function NumberField({
  value: {v, minVal, maxVal, vUnit},
  title,
  increment: {stepInc},
  slider: {minPos, maxPos, posUnit, stepSl},
  onChange,
  text,
}) {
  return (
    <div>
      <label>{title}</label>
      <NumberInput value={v} text={vUnit} onChange={onChange}></NumberInput>
      {text}
    </div>
  );
}

NumberField.defaultProps = {
  increment: {},
  slider: {},
};

export default NumberField;
