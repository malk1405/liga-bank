import React from 'react';

function Hamburger({onClick, isOpen}) {
  let className = `hamburger`;
  const classes = [className];
  if (isOpen) {
    classes.push(`${className}--open`);
  }

  return (
    <button className={classes.join(` `)} onClick={onClick} aria-expanded={isOpen}>
      <div className="hamburger__outer">
        <div className="hamburger__inner"></div>
      </div>
      <span className="visually-hidden">Меню</span>
    </button>
  );
}

export default Hamburger;
