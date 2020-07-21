import React from 'react';
import Link from '../link/link';

const tabs = [
  {
    mod: `credits`,
    tabContent: `Кредиты`,
    content: (
      <React.Fragment>
        <p>Кредиты на любой случай</p>
        <Link draggable={false} href="#calculator" className="link">
          Рассчитать кредит
        </Link>
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
        <Link draggable={false} href="#departments" className="link">
          Найти отделение
        </Link>
      </React.Fragment>
    ),
  },
];

export default tabs;
