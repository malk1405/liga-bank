import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../../utils/getClasses';
import noop from '../../../utils/noop';
import formatNumber from '../../../utils/format-number';
import {block} from '../calculator';

function NumberInput({value, onChange, onFocus, onBlur, inputRef}) {
  const [position, setPosition] = useState(null);
  const isDelRef = useRef(null);
  const valueRef = useRef(null);

  const handleKeyDown = (e) => {
    isDelRef.current = e.keyCode === 46;
  };

  const handleChange = (e) => {
    const {value: newValue, selectionEnd: cursorPosition} = e.target;

    if (!newValue.length) {
      onChange(null);
    } else if (/^[0-9 ]*$/.test(newValue)) {
      const val = Number(newValue.replace(/ /g, ``)) || 0;
      if (val === value) {
        setPosition(cursorPosition + isDelRef.current);
      } else {
        const addedSymbols = formatNumber(val).length - newValue.length;
        const newPos = cursorPosition + addedSymbols;
        setPosition(newPos < 0 ? 0 : newPos);
        onChange(val);
      }
    } else {
      setPosition(cursorPosition - 1);
    }
  };

  useEffect(() => {
    if (position !== null) {
      inputRef.current.setSelectionRange(position, position);
      setPosition(null);
    }
  }, [position]);

  useEffect(() => {
    inputRef.current.style.width = `${
      valueRef.current.getBoundingClientRect().width || 10
    }px`;
  }, [value, inputRef, valueRef]);

  const modifiedValue = formatNumber(value);

  const handleFocus = () => {
    inputRef.current.setSelectionRange(modifiedValue.length, modifiedValue.length);
    onFocus();
  };

  return (
    <React.Fragment>
      <pre
        ref={valueRef}
        className={getClasses({block, element: `input-clone`})}
      >
        {modifiedValue + ` `}
      </pre>
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        value={modifiedValue}
        className={getClasses({block, element: `input`})}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
      ></input>
    </React.Fragment>
  );
}

NumberInput.defaultProps = {
  onBlur: noop,
};

NumberInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  inputRef: PropTypes.shape({current: PropTypes.instanceOf(Element)})
    .isRequired,
};

export default NumberInput;
