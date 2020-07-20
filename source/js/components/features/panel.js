import React from 'react';
import PropTypes from 'prop-types';

function Panel({children, style, mod}) {
  const className = `features__panel`;
  const classes = [
    `container`,
    className,
    ...mod.map((el) => `${className}--${el}`),
  ];
  return (
    <div className={classes.join(` `)} style={style}>
      <p>Лига Банк</p>
      {children}
    </div>
  );
}

Panel.defaultProps = {
  mod: [],
};

Panel.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  mod: PropTypes.arrayOf[PropTypes.string],
};

export default Panel;
