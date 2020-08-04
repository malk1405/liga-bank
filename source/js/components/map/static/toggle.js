import React from 'react';
import PropTypes from 'prop-types';

function Toggle({onClick}) {
  return (
    <button type="button" className={`button button--main`} onClick={onClick}>
      Загрузить Яндекс.Карты
    </button>
  );
}

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
