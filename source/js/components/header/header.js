import React from 'react';

import Logo from '../logo/logo';
import Nav from '../nav/nav';
import Login from '../login/login';

function Header() {
  return (
    <header>
      <Logo></Logo>
      <Nav></Nav>
      <Login></Login>
    </header>
  );
}

export default Header;
