import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../../utils/getClasses';
import {block} from '../calculator';

function Increment({onDestroy, children, onClick, modifiers}) {
  const isFocused = useRef(false);

  useEffect(() => {
    if (isFocused.current) {
      return onDestroy;
    }
  }, [onDestroy]);

  const onFocus = () => {
    isFocused.current = true;
  };

  const onBlur = () => {
    isFocused.current = false;
  };

  return (
    <button
      title={children}
      type="button"
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`button ${getClasses({
        block,
        element: `field-button`,
        modifiers,
      })}`}
    >
      <span className="visually-hidden">{children}</span>
    </button>
  );
}

Increment.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Increment;
