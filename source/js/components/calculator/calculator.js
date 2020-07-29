import React, {useState, useEffect} from 'react';

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
  const [hasError, setHasError] = useState(false);
  const [params, setParams] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const handleIdChange = (newId) => {
    setId(newId);
    setParams(null);
  };

  const handleError = () => {
    setHasError(true);
  };

  const handleParamsChange = (p) => {
    setParams(p);
    setHasError(false);
  };

  useEffect(() => {
    setIsReady(false);
  }, [hasError, params]);

  return (
    <section className={`section container ${block}`} id="calculator">
      <h2>Кредитный калькулятор</h2>
      <div className={getClasses({block, element: `config`})}>
        <div className={getClasses({block, element: `params`})}>
          <Step num={1} title="Цель кредита">
            <StepOne id={id} onChange={handleIdChange}></StepOne>
          </Step>

          {typeof id === `number` && (
            <Step num={2} title="Введите параметры кредита">
              <StepTwo
                id={id}
                onError={handleError}
                onChange={handleParamsChange}
              ></StepTwo>
            </Step>
          )}
        </div>
        {params && (
          <Offer
            config={[
              {
                title: params.creditTitle,
                value: `${formatNumber(params.creditSum)} ${conjugate(
                    params.creditSum,
                    rubles
                )}`,
              },
              {
                title: `Процентная ставка`,
                value: `${String(
                    (params.interestRate * 100).toFixed(2)
                ).replace(`.`, `,`)}%`,
              },
              {
                title: `Ежемесячный платеж`,
                value: `${formatNumber(params.monthly)} ${conjugate(
                    params.monthly,
                    rubles
                )}`,
              },
              {
                title: `Необходимый доход`,
                value: `${formatNumber(params.minIncome)} ${conjugate(
                    params.minIncome,
                    rubles
                )}`,
              },
            ]}
            error={params.error}
            hasError={hasError}
          />
        )}
      </div>
    </section>
  );
}

export {block};

export default Calculator;
