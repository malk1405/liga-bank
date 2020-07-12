import React from 'react';
import PropTypes from 'prop-types';

import LoginImg from '../../../img/svg/login.svg';

function Login({onClick}) {
  return (
    <button
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
  onClick: PropTypes.func.isRequired,
};

export default Login;
