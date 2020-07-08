import React from 'react';
import PropTypes from 'prop-types';

function Hamburger({onClick, isOpen}) {
  let className = `hamburger__inner`;
  const classes = [className];
  if (isOpen) {
    classes.push(`${className}--open`);
  }

  return (
    <button
      className="hamburger button"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className={classes.join(` `)}></span>

      <span className="visually-hidden">Меню</span>
    </button>
  );
}


Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default Hamburger;
