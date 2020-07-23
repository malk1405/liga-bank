import React from 'react';
import PropTypes from 'prop-types';

import {block} from "./tabs";
import ListItem from './item';
import getClasses from '../../utils/getClasses';


function List({children}) {
  return (
    <ul className={getClasses({block, element: `list`})}>
      {children.map((el, i) => (
        <ListItem key={i} block={block}>
          {el}
        </ListItem>
      ))}
    </ul>
  );
}

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default List;
