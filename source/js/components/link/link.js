import React from 'react';
import PropTypes from 'prop-types';

function Link({children, href, classes, tabindex}) {
  return (
    <a href={href} className={classes} tabIndex={tabindex}>
      {children}
    </a>
  );
}

Link.defaultProps = {
  href: `#`,
  tabindex: 0,
};

Link.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
  classes: PropTypes.string,
  tabindex: PropTypes.number,
};

export default Link;
