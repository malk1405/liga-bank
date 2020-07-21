import React from 'react';

const tabs = [
  {
    mod: `credits`,
    tabContent: `Кредиты`,
    content: (
      <React.Fragment>
        <p>Кредиты на любой случай</p>
        <a draggable="false" href="#calculator" className="link">
          Рассчитать кредит
        </a>
      </React.Fragment>
    ),
  },
  {
    mod: `confidence`,
    tabContent: `Уверенность`,
    content: (
      <React.Fragment>
        <p>Ваша уверенность в завтрашнем дне</p>
      </React.Fragment>
    ),
  },
  {
    mod: `near`,
    tabContent: `Рядом`,
    tabMod: [`dark`],
    content: (
      <React.Fragment>
        <p>Всегда рядом</p>
        <a draggable="false" href="#departments" className="link">
          Найти отделение
        </a>
      </React.Fragment>
    ),
  },
];

export default tabs;
