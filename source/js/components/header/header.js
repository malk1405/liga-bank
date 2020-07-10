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
    <header>
      <Logo></Logo>
      <Nav></Nav>
      <Login onClick={openModal}></Login>
      {modalIsOpen && <Modal onClose={closeModal}>модальное окно</Modal>}
    </header>
  );
}

export default Header;
