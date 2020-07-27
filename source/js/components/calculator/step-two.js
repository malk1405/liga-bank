import React, {useEffect, useState, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';

import creditTypes from './credit-types';
import NumberField from '../number/number-field';
import {rubles, years} from '../../utils/conjugate';
import Range from '../range/range';
import getClasses from '../../utils/getClasses';
import {block} from './calculator';

function StepTwo({id}) {
  const [price, setPrice] = useState(null);
  const [priceError, setPriceError] = useState(false);

  const [firstPayPercent, setFirstPayPercent] = useState(null);

  const [period, setPeriod] = useState(null);
  const [periodError, setPeriodError] = useState(false);

  const [checkboxes, setCheckboxes] = useState({});

  const config = creditTypes[id];

  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  const priceRef = useRef(price);
  priceRef.current = price;

  const handlePriceChange = (value) => {
    setPrice(value);
    setPriceError(!config.price.validate(value));
  };

  const handlePeriodChange = (value) => {
    setPeriod(value);
    setPeriodError(!config.period.validate(value));
  };

  const setFirstPay = useCallback(
      (value) => {
        setFirstPayPercent((value / priceRef.current) * 100);
      },
      [priceRef, setFirstPayPercent]
  );

  const handlePayBlur = () => {
    setFirstPayPercent((prev) => Math.max(config.firstPay.minPercentage, prev));
  };

  const handlePeriodBlur = () => {
    handlePeriodChange(
        (function () {
          const {min, max} = config.period;
          if (period < min) {
            return min;
          }

          return Math.min(max, period);
        })()
    );
  };

  if (!config) {
    return `Ошибка`;
  }

  useEffect(() => {
    handlePriceChange(config.price.min);

    if (config.firstPay) {
      setFirstPayPercent(config.firstPay.minPercentage);
    }

    handlePeriodChange(config.period.min);
  }, [id]);

  const firstPay = Math.round((price * firstPayPercent) / 100);

  return (
    <div className={getClasses({block, element: ``})}>
      <NumberField
        value={price}
        title={config.priceTitle}
        onChange={handlePriceChange}
        units={rubles}
        min={config.price.min}
        max={config.price.max}
        step={config.price.step}
        hasError={priceError}
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
            onBlur={handlePayBlur}
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
        title="Срок кредитования"
        value={period}
        units={years}
        min={config.period.min}
        max={config.period.max}
        onChange={handlePeriodChange}
        onBlur={handlePeriodBlur}
        hasError={periodError}
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
    </div>
  );
}

StepTwo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default StepTwo;
