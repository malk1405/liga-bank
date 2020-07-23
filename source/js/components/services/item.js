import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';

function ListItem({children, block}) {
  return <li className={getClasses({block, element: `item`})}>{children}</li>;
}

ListItem.propTypes = {
  block: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ListItem;
