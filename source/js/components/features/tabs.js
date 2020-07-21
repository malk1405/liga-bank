import React from 'react';

const tabs = [
  {
    title: `Кредиты`,
    mod: `credits`,
    content: (
      <React.Fragment>
        <p>Кредиты на любой случай</p>
        <a href="#calculator" className="link">
          Рассчитать кредит
        </a>
      </React.Fragment>
    ),
  },
  {
    title: `Уверенность`,
    mod: `confidence`,
    content: (
      <React.Fragment>
        <p>Ваша уверенность в завтрашнем дне</p>
      </React.Fragment>
    ),
  },
  {
    title: `Рядом`,
    mod: `near`,
    tabMod: [`dark`],
    content: (
      <React.Fragment>
        <p>Всегда рядом</p>
        <a href="#departments" className="link">Найти отделение</a>
      </React.Fragment>
    ),
  },
];

export default tabs;
