import React from 'react';

import LoginImg from "../../../img/svg/login.svg";


function Login({onClick}) {
  return (
    <button title="Войти в Интернет-банк" onClick={onClick}>
      <LoginImg />
      <span>Войти в Интернет-банк</span>
    </button>
  );
}

export default Login;
