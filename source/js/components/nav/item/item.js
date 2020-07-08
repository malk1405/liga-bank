import React, {useRef} from 'react';
import PropTypes from 'prop-types';

function NavItem({children, isOpen}) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="nav__item"
      style={{
        height: isOpen && ref.current ? `${ref.current.scrollHeight}px` : null,
      }}
    >
      {children}
    </li>
  );
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default NavItem;
