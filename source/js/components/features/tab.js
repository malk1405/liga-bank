import React from 'react';
import PropTypes from 'prop-types';

function Tab({children}) {
  return <span className="visually-hidden">{children}</span>;
}

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tab;
