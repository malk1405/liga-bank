import React from 'react';

function Toggle({onclick}) {
  return (
    <button type="button" onClick={onclick}>
      Загрузить Яндекс.Карты
    </button>
  );
}

export default Toggle;
