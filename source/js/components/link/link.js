import React from 'react';
import PropTypes from 'prop-types';

function Link({children, href, classes, tabindex}) {
  return (
    <a href={href} className={`link ${classes}`.trim()} tabIndex={tabindex}>
      {children}
    </a>
  );
}

Link.defaultProps = {
  href: `#`,
  tabindex: null,
  classes: ``
};

Link.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
  classes: PropTypes.string,
  tabindex: PropTypes.number,
};

export default Link;
