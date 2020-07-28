import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import {block as outerBlock} from './calculator';

const block = `offer`;

function Offer({config, errorText}) {
  return (
    <div
      className={`${getClasses({
        block: outerBlock,
        element: block,
      })} ${block}`}
    >
      {errorText ? (
        <React.Fragment>
          <p>{errorText}</p>
          <p>Попробуйте использовать другие параметры для расчёта.</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h3>Наше предложение</h3>
          <dl className={getClasses({block, element: `list`})}>
            {config.map(({value, title}, i) => (
              <div key={i} className={getClasses({block, element: `item`})}>
                <dt className={getClasses({block, element: `title`})}>
                  {title}
                </dt>
                <dd className={getClasses({block, element: `description`})}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <button
            className={`${getClasses({
              block: `button`,
              modifiers: [`main`],
            })} ${getClasses({block, element: `button`})}`}
            type="button"
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
