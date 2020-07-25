import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';

function modifyValue(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
}

const block = `number-input`;
function NumberInput({value, onChange, text, validate, errorMessage}) {
  const [position, setPosition] = useState(null);
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const {value: newValue, selectionEnd: cursorPosition} = e.target;

    if (/^[0-9 ]*$/.test(newValue)) {
      const val = Number(newValue.replace(/ /g, ``)) || 0;
      if (val === value) {
        setPosition(cursorPosition);
      } else {
        const addedSymbols =
          modifyValue(val).length - modifyValue(value).length;

        setPosition(
            addedSymbols < 0
              ? cursorPosition + addedSymbols + 1
              : cursorPosition + addedSymbols - 1
        );
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
    setHasError(!validate(value));
  }, [value, validate]);

  const modifiedValue = modifyValue(value);

  return (
    <div className={getClasses({block})}>
      <label>
        <input
          ref={inputRef}
          value={modifiedValue}
          size={modifiedValue.length}
          className={getClasses({block, element: `field`})}
          onChange={handleChange}
        ></input>
        {text}
      </label>
      {hasError && <p>{errorMessage}</p>}
    </div>
  );
}

NumberInput.defaultProps = {
  validate() {
    return true;
  },

  errorMessage: `Ошибка`,
};

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  validate: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default NumberInput;
