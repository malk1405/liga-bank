import React, {useState, useRef} from 'react';

import Logo from '../logo/logo';
import Nav from '../nav/nav';
import Login from '../login/login';
import Modal from '../modal/modal';
import LoginForm from '../login/form';

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const loginRef = useRef(null);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const inputRef = useRef(null);

  const handleCreateModal = () => {
    inputRef.current.focus();
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
        {modalIsOpen && (
          <Modal onCreate={handleCreateModal} onClose={closeModal} modifiers={[`login`]}>
            <LoginForm inputRef={inputRef} onSubmit={closeModal}></LoginForm>
          </Modal>
        )}
      </div>
    </header>
  );
}

export default Header;
