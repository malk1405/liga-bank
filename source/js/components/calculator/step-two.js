import React, {useEffect, useState, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';

import conjugate, {rubles, years} from '../../utils/conjugate';

import creditTypes from './credit-types';
import NumberField from '../number/number-field';

function StepTwo({id}) {
  const [price, setPrice] = useState(null);
  const [firstPayPercent, setFirstPayPercent] = useState(null);
  const [period, setPeriod] = useState(null);
  const [checkboxes, setCheckboxes] = useState({});

  const config = creditTypes[id];

  const priceRef = useRef(price);
  priceRef.current = price;

  const setFirstPay = useCallback(
      (value) => {
        setFirstPayPercent((value / priceRef.current) * 100);
      },
      [priceRef, setFirstPayPercent]
  );

  if (!config) {
    return `Ошибка`;
  }

  useEffect(() => {
    setPrice(config.price.min);

    if (config.firstPay) {
      setFirstPayPercent(config.firstPay.minPercentage);
    }

    setPeriod(config.period.min);
  }, [id]);

  const firstPay = Math.round((price * firstPayPercent) / 100);

  return (
    <form>
      <NumberField
        value={{v: price}}
        title={config.priceTitle}
        onChange={setPrice}
        text={conjugate(price, rubles)}
      />

      {Boolean(firstPay) && (
        <NumberField
          title="Первоначальный взнос"
          value={{v: firstPay}}
          text={conjugate(firstPay, rubles)}
        />
      )}

      <NumberField
        value={{v: period}}
        title="Срок кредитования"
        onChange={setPeriod}
        text={conjugate(period, years)}
      />

      {config.checkboxes.map(({name, title}) => (
        <label key={name}>
          <input type="checkbox" name={name} />
          {title}
        </label>
      ))}
    </form>
  );
}

export default StepTwo;
