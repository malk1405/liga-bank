import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import {block} from './calculator';

function Offer({config, errorText}) {
  return (
    <div className={getClasses({block, element: `offer`})}>
      {errorText ? (
        <React.Fragment>
          <p>{errorText}</p>
          <p>Попробуйте использовать другие параметры для расчёта.</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h3>Наше предложение</h3>
          <dl>

            {config.map(({value, title}, i) => (
              <div key={i}>
                <dt>{title}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <button
            className={`${getClasses({
              block: `button`,
              modifiers: [`main`],
            })}`}
            type="submit"
          >
            Оформить заявку
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

Offer.propTypes = {
  config: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.string,
      })
  ).isRequired,
  errorText: PropTypes.string.isRequired,
};

export default Offer;
