import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';

function Input({
  inputRef,
  classes,
  name,
  value,
  placeholder,
  onChange,
  title,
  minLength,
  maxLength,
  pattern,
  required,
  wasInvalid,
  validate,
  type,
}) {
  const [isModified, setIsModified] = useState(false);

  const handleChange = (e) => {
    let {value: newValue} = e.target;

    newValue = validate(newValue) ? newValue : value || ``;

    if (maxLength) {
      newValue = newValue.substr(0, maxLength);
    }

    setIsModified(true);
    onChange({name, value: newValue});
  };

  const ref = useRef(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.current = ref.current;
    }
  }, []);

  return (
    <input
      ref={ref}
      className={`${getClasses({
        block: `input`,
        modifiers: isModified || wasInvalid ? [`modified`] : [],
      })}${classes ? ` ${classes}` : ``}`}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      value={value || ``}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
      title={title}
    />
  );
}

Input.defaultProps = {
  validate() {
    return true;
  },
};

Input.propTypes = {
  inputRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  classes: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  wasInvalid: PropTypes.bool,
  validate: PropTypes.func,
  type: PropTypes.text,
};

export default Input;
