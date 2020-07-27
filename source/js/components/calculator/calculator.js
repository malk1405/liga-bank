import React, {useState} from 'react';

import Step from './step';
import StepOne from './step-one';
import StepTwo from './step-two';
import Offer from './offer';
import formatNumber from '../../utils/format-number';
import conjugate, {rubles} from '../../utils/conjugate';
import getClasses from '../../utils/getClasses';

const block = `calculator`;

function Calculator() {
  const [id, setId] = useState(null);
  const onChange = (newId) => {
    setId(newId);
  };

  return (
    <section className={`section container ${block}`} id="calculator">
      <h2>Кредитный калькулятор</h2>
      <div className={getClasses({block, element: `config`})}>
        <div className={getClasses({block, element: `params`})}>
          <Step num={1} title="Цель кредита">
            <StepOne id={id} onChange={onChange}></StepOne>
          </Step>

          {typeof id === `number` && (
            <Step num={2} title="Введите параметры кредита">
              <StepTwo id={id}></StepTwo>
            </Step>
          )}
        </div>
        <Offer
          config={[
            {
              title: `Сумма`,
              value: `${formatNumber(1300000)} ${conjugate(1300000, rubles)}`,
            },
            {
              title: `Процентная ставка`,
              value: `9,40%`,
            },
            {
              title: `Ежемесячный платеж`,
              value: `${formatNumber(27868)} ${conjugate(27868, rubles)}`,
            },
            {
              title: `Необходимый доход`,
              value: `${formatNumber(61929)} ${conjugate(61929, rubles)}`,
            },
          ]}
          errorText=""
        />
      </div>
    </section>
  );
}

export {block};

export default Calculator;
