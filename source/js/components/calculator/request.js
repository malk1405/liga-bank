import React from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';

const block = `request`;

function Request({items, onSubmit}) {
  return (
    <div className={block}>
      <dl>
        {items.map(({title, value}, i) => (
          <div className={getClasses({block, element: `item`})} key={i}>
            <dd className={getClasses({block, element: `title`})}>{title}</dd>
            <dt className={getClasses({block, element: `value`})}>{value}</dt>
          </div>
        ))}
      </dl>
      <form onSubmit={onSubmit}>
        <input id="request__name" name="name" placeholder="ФИО" />
        <label className="visually-hidden">ФИО</label>
        <input id="request__phone" name="phone" placeholder="Телефон" />
        <label className="visually-hidden">Телефон</label>
        <input id="request__mail" name="mail" placeholder="E-mail" />
        <label className="visually-hidden">E-mail</label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

Request.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({title: PropTypes.string, value: PropTypes.string})
  ).isRequired,
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Request;
