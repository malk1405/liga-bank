import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import {block} from './calculator';

function Step({children, num, title}) {
  return (
    <div
      className={getClasses({
        block,
        element: `step`,
        modifiers: [num],
      })}
    >
      <h3>
        Шаг {num}. {title}
      </h3>
      {children}
    </div>
  );
}

Step.propTypes = {
  children: PropTypes.node.isRequired,
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Step;
