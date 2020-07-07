import React from 'react';

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

export default Hamburger;
