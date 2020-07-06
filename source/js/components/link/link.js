import React from 'react';

function Link({children, href, classes}) {
  return (
    <a href={href || `#`} className={classes}>
      {children}
    </a>
  );
}
export default Link;
