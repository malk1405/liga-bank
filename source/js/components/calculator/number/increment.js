import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../../utils/getClasses';
import {block} from '../calculator';

function Increment({children, onClick, modifiers}) {
  return (
    <button
      title={children}
      type="button"
      onClick={onClick}
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
  children: PropTypes.node.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Increment;
