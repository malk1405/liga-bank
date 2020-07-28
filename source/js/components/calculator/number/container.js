import React from 'react';
import PropTypes from 'prop-types';
import {block} from '../calculator';
import getClasses from '../../../utils/getClasses';

function NumberContainer({children}) {
  return (
    <div
      className={getClasses({
        block,
        element: `field-container`,
      })}
    >
      {children}
    </div>
  );
}

NumberContainer.propTypes = {
  children: PropTypes.node,
};

export default NumberContainer;
