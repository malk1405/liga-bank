import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import Mark from '../../../img/svg/inline/mark.svg';


function ListItem({children, block}) {
  return <li className={getClasses({block, element: `item`})}>
    <Mark className={getClasses({block, element: `mark`})}></Mark>
    {children}</li>;
}

ListItem.propTypes = {
  block: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ListItem;
