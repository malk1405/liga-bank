import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

import creditTypes from './credit-types';
import NumberField from './number/field';
import conjugate, {rubles, years} from '../../utils/conjugate';
import Range from '../range/range';
import getClasses from '../../utils/getClasses';
import {block} from './calculator';
import formatNumber from '../../utils/format-number';
import NumberContainer from './number/container';
import Checkbox from '../checkbox/checkbox';

function StepTwo({id}) {
  const [price, setPrice] = useState(null);
  const [firstPayPercent, setFirstPayPercent] = useState(null);
  const [period, setPeriod] = useState(null);
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
  };

  const handlePeriodChange = (value) => {
    setPeriod(value);
  };

  const handlePercentChange = (value) => {
    setFirstPayPercent(
        Math.min(
            (config.firstPay.getMax({price, checkboxes}) / price) * 100,
            value
        )
    );
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

  const handleChecboxChange = ({target: {name, checked}}) => {
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
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

  const priceError = !config.price.validate(price) && mountedRef.current;

  const minPercentError =
    config.firstPay &&
    config.firstPay.minPercentage > firstPayPercent &&
    mountedRef.current;

  const firstPay = Math.round((price * firstPayPercent) / 100) || 0;
  const maxFirstPay =
    (config.firstPay && config.firstPay.getMax({price, checkboxes})) || 0;

  const percentageStep = 5;

  const maxFirstPayPercentage = useMemo(() => {
    if (!config.firstPay) {
      return null;
    }

    return Math.max(
        Math.ceil(
            ((config.firstPay.getMax({price, checkboxes}) / price) * 100) /
          percentageStep
        ) * 5,
        config.firstPay.minPercentage
    );
  }, [config, price, checkboxes, percentageStep]);

  const maxPercentError =
    firstPay > maxFirstPay && !priceError && mountedRef.current;

  const periodError = !config.period.validate(period);

  return (
    <React.Fragment>
      <NumberContainer>
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
        <div className={getClasses({block, element: `limits`})}>
          <span>
            От {formatNumber(config.price.min)} до{` `}
            {formatNumber(config.price.max)}
            {` `}
            {conjugate(config.price.max, rubles)}
          </span>
        </div>
      </NumberContainer>
      {Boolean(config.firstPay) && (
        <NumberContainer>
          <NumberField
            title="Первоначальный взнос"
            value={firstPay}
            units={rubles}
            min={(price * config.firstPay.minPercentage) / 100}
            max={price}
            onChange={setFirstPay}
            onBlur={handlePayBlur}
            hasError={minPercentError || maxPercentError}
          />
          <Range
            min={config.firstPay.minPercentage}
            max={maxFirstPayPercentage}
            step={5}
            value={firstPayPercent}
            onChange={handlePercentChange}
          />
          <div className={getClasses({block, element: `limits`})}>
            <span>{formatNumber(config.firstPay.minPercentage)}%</span>
          </div>
        </NumberContainer>
      )}
      <NumberContainer>
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
        <div className={getClasses({block, element: `limits`})}>
          <span>
            {formatNumber(config.period.min)}
            {` `}
            {conjugate(config.period.min, years)}
          </span>
          <span>
            {formatNumber(config.period.max)}
            {` `}
            {conjugate(config.period.max, years)}
          </span>
        </div>
      </NumberContainer>
      {config.checkboxes.map(({name, title}) => (
        <label key={name}>
          <Checkbox
            name={name}
            checked={checkboxes[name]}
            onChange={handleChecboxChange}
          />
          {title}
        </label>
      ))}
    </React.Fragment>
  );
}

StepTwo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default StepTwo;