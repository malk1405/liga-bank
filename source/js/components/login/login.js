import React from 'react';
import PropTypes from 'prop-types';

import LoginImg from '../../../img/svg/inline/login.svg';

function Login({onClick, loginRef}) {
  return (
    <button
      ref={loginRef}
      title="Войти в Интернет-банк"
      onClick={onClick}
      className="header__login button"
    >
      <LoginImg />
      <span>Войти в Интернет-банк</span>
    </button>
  );
}

Login.propTypes = {
  loginRef: PropTypes.shape({current: PropTypes.instanceOf(Element)})
    .isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Login;
