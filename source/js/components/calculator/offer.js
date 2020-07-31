import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import formatNumber from '../../utils/format-number';

const block = `offer`;

function Offer({config, disabled, error, onClick}) {
  return (
    <div
      className={block}
    >
      {error && !disabled ? (
        <div className={getClasses({block, element: `reject`})}>
          <p>{`Наш банк не выдаёт ${error.errorTitle} меньше ${formatNumber(
              error.minCredit
          )} рублей.`}</p>
          <div className={getClasses({block, element: `try`})}>
            <p>Попробуйте использовать другие параметры для расчёта.</p>
          </div>
        </div>
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
            onClick={onClick}
            disabled={disabled}
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
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    minCredit: PropTypes.number,
    errorTitle: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
};

export default Offer;
