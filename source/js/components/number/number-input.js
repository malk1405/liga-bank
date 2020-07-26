import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import noop from '../../utils/noop';

function modifyValue(num) {
  if (num === null) {
    return ``;
  }
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
}

const block = `number-input`;
function NumberInput({value, onChange, onBlur}) {
  const [position, setPosition] = useState(null);
  const inputRef = useRef(null);
  const isDelRef = useRef(null);

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
        const addedSymbols =
          modifyValue(val).length - modifyValue(value).length;
        const newPos = cursorPosition + addedSymbols - Math.sign(addedSymbols);
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

  const modifiedValue = modifyValue(value);

  return (
    <input
      ref={inputRef}
      type="text"
      inputMode="numeric"
      value={modifiedValue}
      size={modifiedValue.length || 1}
      className={getClasses({block, element: `field`})}
      onChange={handleChange}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
    ></input>
  );
}

NumberInput.defaultProps = {
  onBlur: noop,
};

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default NumberInput;
