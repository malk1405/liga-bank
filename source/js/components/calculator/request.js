import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';

const block = `request`;

function Request({items, onSubmit, inputRef}) {
  const [fields, setFields] = useState({});

  useEffect(() => {
    inputRef.current.focus();
    return () => {};
  }, []);

  const onChange = ({target: {name, value}}) => {
    setFields((prev) => {
      if (name === `phone` && /\D/.test(value)) {
        return prev;
      }

      if (name === `name` && /\d/.test(value)) {
        return prev;
      }

      return {...prev, [name]: value};
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(fields);
  };

  return (
    <div className={block}>
      <dl>
        {items.map(({title, value}, i) => (
          <div className={getClasses({block, element: `item`})} key={i}>
            <dt className={getClasses({block, element: `title`})}>{title}</dt>
            <dd className={getClasses({block, element: `value`})}>{value}</dd>
          </div>
        ))}
      </dl>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          id="request__name"
          type="text"
          name="name"
          placeholder="ФИО"
          value={fields.name || ``}
          required
          onChange={onChange}
          minLength={3}
          maxLength={40}
        />
        <label className="visually-hidden">ФИО</label>
        <input
          id="request__phone"
          type="tel"
          name="phone"
          placeholder="Телефон"
          onChange={onChange}
          value={fields.phone || ``}
          required
          minLength={10}
          maxLength={10}
        />
        <label className="visually-hidden">Телефон</label>
        <input
          id="request__mail"
          type="email"
          name="mail"
          required
          onChange={onChange}
          placeholder="E-mail"
          value={fields.mail || ``}
        />
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
  onSubmit: PropTypes.func.isRequired,
  inputRef: PropTypes.shape({current: PropTypes.instanceOf(Element)})
    .isRequired,
};

export default Request;
