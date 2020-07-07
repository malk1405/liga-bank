import React, {useRef} from 'react';

function NavItem({children, isOpen}) {
  const ref = useRef(null);
  return <li
    ref={ref}
    className="nav__item"
    style={{height: isOpen && ref.current ? `${ref.current.scrollHeight}px` : null}}
  >
    {children}
  </li>;
}

export default NavItem;
