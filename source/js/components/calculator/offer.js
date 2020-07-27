import React from 'react';
import PropTypes from 'prop-types';

function Offer({config, errorText}) {
  return (
    <div>
      {errorText ? (
        <React.Fragment>
          <p>{errorText}</p>
          <p>Попробуйте использовать другие параметры для расчёта.</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h3>Наше предложение</h3>
          {config.map(({value, title}, i) => (
            <div key={i}>
              <p>{value}</p>
              <p>{title}</p>
            </div>
          ))}
          <button type="submit">Оформить заявку</button>
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
