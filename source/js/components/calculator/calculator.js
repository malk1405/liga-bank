import React, {useState, useEffect, useMemo, useRef} from 'react';

import Step from './step';
import StepOne from './step-one';
import StepTwo from './step-two';
import Offer from './offer';
import formatNumber from '../../utils/format-number';
import conjugate, {rubles, years} from '../../utils/conjugate';
import getClasses from '../../utils/getClasses';
import Request from './request';
import {submitableFields} from './credit-types';
import Modal from '../modal/modal';
import noop from '../../utils/noop';

const block = `calculator`;

function Calculator() {
  const [id, setId] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [params, setParams] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleIdChange = (newId) => {
    setId(newId);
    setIsReady(false);
  };

  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setIsReady(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
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

  const {requestNum, requestItems} = useMemo(() => {
    function pad(n) {
      const z = `0`;
      n = String(n);
      return n.length >= 4 ? n : new Array(4 - n.length + 1).join(z) + n;
    }

    const reqNum = Number(localStorage.getItem(`last`)) + 1 || 1;

    return {
      requestNum: reqNum,
      requestItems: isReady
        ? [
          {title: `Номер заявки`, value: `№ ${pad(reqNum)}`},
          {title: `Цель кредита`, value: params.purpose},
          {
            title: params.priceTitle,
            value: `${formatNumber(params.price)} ${conjugate(
                params.price,
                rubles
            )}`,
          },
          {
            title: `Первоначальный взнос`,
            value: params.firstPay
              ? `${formatNumber(params.firstPay)} ${conjugate(
                  params.firstPay,
                  rubles
              )}`
              : ``,
          },
          {
            title: `Срок кредитования`,
            value: `${formatNumber(params.period)} ${conjugate(
                params.period,
                years
            )}`,
          },
        ]
        : null,
    };
  }, [isReady]);

  const handleSubmit = (client) => {
    const data = {};
    submitableFields.forEach((el) => {
      if (params[el]) {
        data[el] = params[el];
      }
    });

    localStorage.setItem(`last`, requestNum);
    localStorage.setItem(
        `req ${requestNum}`,
        JSON.stringify({params: data, client})
    );
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    handleIdChange(null);
  };

  useEffect(() => {
    if (modalIsOpen) {
      return () => {
        buttonRef.current.focus();
      };
    }
    return noop;
  }, [modalIsOpen]);

  return (
    <section className={`section container ${block}`} id="calculator">
      <h2>Кредитный калькулятор</h2>
      <div className={getClasses({block, element: `config`})}>
        <div className={getClasses({block, element: `params`})}>
          <Step num={1} title="Цель кредита">
            <StepOne
              id={id}
              onChange={handleIdChange}
              buttonRef={buttonRef}
            ></StepOne>
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
        <div
          className={getClasses({
            block,
            element: `offer-container`,
            modifiers: typeof id === `number` ? [`visible`] : [],
          })}
        >
          {typeof id === `number` && params && (
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
              disabled={hasError}
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      {requestItems && (
        <Request
          items={requestItems}
          onSubmit={handleSubmit}
          inputRef={inputRef}
        ></Request>
      )}

      {modalIsOpen && (
        <Modal onClose={closeModal} modifiers={[`sm`]}>
          <div className={`${block}-modal`}>
            <p>Спасибо за обращение в наш банк.</p>
            <div
              className={getClasses({
                block: `${block}-modal`,
                element: `manager`,
              })}
            >
              <p>
                Наш менеджер скоро свяжется с вами по указанному номеру
                телефона.
              </p>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

export {block};

export default Calculator;
