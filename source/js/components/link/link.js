import React from 'react';

function Link({children, href, classes, tabindex}) {
  return (
    <a href={href || `#`} className={classes} tabIndex={tabindex}>
      {children}
    </a>
  );
}
export default Link;
