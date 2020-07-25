import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';

import {block} from './tabs';

function Tab({mod, children: {SVG, text}}) {
  return (
    <span className={getClasses({block, element: `tab-info`})}>
      <SVG className={getClasses({block, element: `icon`, modifiers: mod})} />
      <span>{text}</span>
    </span>
  );
}

Tab.propTypes = {
  mod: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.shape({
    SVG: PropTypes.func,
    text: PropTypes.string,
  }).isRequired,
};

export default Tab;
