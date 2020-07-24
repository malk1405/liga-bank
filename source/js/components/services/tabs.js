import React from 'react';

import Link from '../link/link';
import List from './list';
import VaultSVG from '../../../img/svg/inline/vault.svg';
import CreditsSVG from '../../../img/svg/inline/cards.svg';
import InsuranceSVG from '../../../img/svg/inline/security.svg';
import PhoneSVG from '../../../img/svg/inline/phone.svg';

import getClasses from '../../utils/getClasses';
import Description from './description';
import Button from './button';

const block = `services`;

const tabs = [
  {
    mod: `deposits`,
    tabContent: {text: `Вклады`, SVG: VaultSVG},
    tabMod: [`dark`],
    content: (
      <React.Fragment>
        <Description>
          Вклады Лига Банка – это выгодная инвестиция в свое будущее
        </Description>
        <List>
          {[
            `Проценты по вкладам до 7%`,
            `Разнообразные условия`,
            `Возможность ежемесячной капитализации или вывод процентов на банковскую карту`,
          ]}
        </List>
        <Button></Button>
      </React.Fragment>
    ),
  },
  {
    mod: `credits`,
    tabContent: {text: `Кредиты`, SVG: CreditsSVG},
    tabMod: [`dark`],
    content: (
      <React.Fragment>
        <Description>Лига Банк выдает кредиты под любые цели</Description>
        <List>{[`Ипотечный кредит`, `Автокредит`, `Потребительский кредит`]}</List>
        <p>
          Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись
          нашим{` `}
          <Link
            classes={getClasses({block, element: `link`})}
            draggable={false}
            href="#calculator"
          >
            кредитным калькулятором
          </Link>
        </p>
      </React.Fragment>
    ),
  },
  {
    mod: `insurance`,
    tabContent: {text: `Страхование`, SVG: InsuranceSVG},

    tabMod: [`dark`],
    content: (
      <React.Fragment>
        <Description>
          Лига Страхование — застрахуем все что захотите
        </Description>
        <List>
          {[
            `Автомобильное страхование`,
            `Страхование жизни и здоровья`,
            `Страхование недвижимости`,
          ]}
        </List>
        <Button></Button>
      </React.Fragment>
    ),
  },
  {
    mod: `online`,
    tabContent: {text: `Онлайн-сервисы`, SVG: PhoneSVG},
    tabMod: [`dark`],
    content: (
      <React.Fragment>
        <Description>
          Лига Банк — это огромное количество онлайн-сервисов для вашего
          удобства
        </Description>
        <List>
          {[
            <React.Fragment key="0">
              Мобильный банк,
              <br />
              который всегда под рукой
            </React.Fragment>,
            `Приложение Лига-проездной позволит вам оплачивать билеты по всему миру`,
          ]}
        </List>
        <Button></Button>
      </React.Fragment>
    ),
  },
];

export {block};
export default tabs;
