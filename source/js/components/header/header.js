import React, {useState, useRef} from 'react';

import Logo from '../logo/logo';
import Nav from '../nav/nav';
import Login from '../login/login';
import Modal from '../modal/modal';

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const loginRef = useRef(null);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    loginRef.current.focus();
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Logo classes="header__logo"></Logo>
        <Nav></Nav>
        <Login loginRef={loginRef} onClick={openModal}></Login>
        {modalIsOpen && <Modal onClose={closeModal}>модальное окно</Modal>}
      </div>
    </header>
  );
}

export default Header;
