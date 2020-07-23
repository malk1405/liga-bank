import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';

import {block} from "./tabs";

function Tab({mod, children: {SVG, text}}) {
  return (
    <React.Fragment>
      <SVG className={getClasses({block, element: `icon`, mod})} />
      <span>{text}</span>
    </React.Fragment>
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
