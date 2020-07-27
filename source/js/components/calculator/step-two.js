import React, {useEffect, useState, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';

import creditTypes from './credit-types';
import NumberField from '../number/number-field';
import conjugate, {rubles, years} from '../../utils/conjugate';
import Range from '../range/range';
import Offer from './offer';
import formatNumber from '../../utils/format-number';

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
        value={price}
        title={config.priceTitle}
        onChange={setPrice}
        units={rubles}
        min={config.price.min}
        max={config.price.max}
        step={config.price.step}
      />

      {Boolean(config.firstPay) && (
        <React.Fragment>
          <NumberField
            title="Первоначальный взнос"
            value={firstPay}
            units={rubles}
            min={(price * config.firstPay.minPercentage) / 100}
            max={price}
            onChange={setFirstPay}
            hasAutoCorrection
          />
          <Range
            min={config.firstPay.minPercentage}
            max={100}
            step={5}
            value={firstPayPercent}
            onChange={setFirstPayPercent}
          />
        </React.Fragment>
      )}

      <NumberField
        value={period}
        title="Срок кредитования"
        onChange={setPeriod}
        units={years}
        min={config.period.min}
        max={config.period.max}
        hasAutoCorrection
      />
      <Range
        min={config.period.min}
        max={config.period.max}
        step={1}
        value={period}
        onChange={setPeriod}
      />

      {config.checkboxes.map(({name, title}) => (
        <label key={name}>
          <input type="checkbox" name={name} />
          {title}
        </label>
      ))}

      <Offer
        config={[
          {
            title: config.sumTitle,
            value: `${formatNumber(1300000)} ${conjugate(1300000, rubles)}`,
          },
        ]}
        errorText=""
      />
    </form>
  );
}

StepTwo.propTypes = {
  id: PropTypes.number.isRequired
};

export default StepTwo;
