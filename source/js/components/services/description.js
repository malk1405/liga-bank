import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import {block} from './tabs';

function Description({children}) {
  return <div className={getClasses({block, element: `description`})}>
    <p>{children}</p>
  </div>;
}

Description.propTypes = {
  children: PropTypes.string
};

export default Description;
