import React from 'react';
import PropTypes from 'prop-types';

function Panel({children}) {
  return (
    <div className="features__panel">
      <p>Лига Банк</p>
      {children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.node,
};

export default Panel;
