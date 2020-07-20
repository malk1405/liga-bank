import React from 'react';
import PropTypes from 'prop-types';

function Panel({children, style}) {
  return (
    <div className="features__panel" style={style}>
      <p>Лига Банк</p>
      {children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};


export default Panel;
