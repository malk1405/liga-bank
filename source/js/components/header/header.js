import React, {useState} from 'react';

import Logo from '../logo/logo';
import Nav from '../nav/nav';
import Login from '../login/login';
import Modal from '../modal/modal';

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Logo classes="header__logo"></Logo>
        <Nav></Nav>
        <Login onClick={openModal}></Login>
        {modalIsOpen && <Modal onClose={closeModal}>модальное окно</Modal>}
      </div>
    </header>
  );
}

export default Header;
