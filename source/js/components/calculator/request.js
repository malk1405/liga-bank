import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';

const block = `request`;

function Request({items, onSubmit, inputRef}) {
  const [fields, setFields] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
    return () => {};
  }, []);

  const handleInvalid = () => {
    setError(true);
  };

  const onChange = ({target: {name, value}}) => {
    setError(false);
    setFields((prev) => {
      if (name === `phone` && /\D/.test(value)) {
        return prev;
      }

      if (name === `phone`) {
        value = value.substr(0, 11);
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

  const blockModifiers = error ? [`error`] : [];

  return (
    <div className={getClasses({block, modifiers: blockModifiers})}>
      <dl>
        {items.map(({title, value}, i) => (
          <div className={getClasses({block, element: `item`})} key={i}>
            <dt className={getClasses({block, element: `title`})}>{title}</dt>
            <dd className={getClasses({block, element: `value`})}>{value}</dd>
          </div>
        ))}
      </dl>
      <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
        <label className={getClasses({block, element: `label`})}>
          <input
            className={getClasses({block: `calculator`, element: `field`})}
            ref={inputRef}
            type="text"
            name="name"
            placeholder="ФИО"
            value={fields.name || ``}
            required
            onChange={onChange}
            minLength={3}
            maxLength={40}
          />
          <span className="visually-hidden">ФИО</span>
        </label>
        <label
          className={getClasses({
            block,
            element: `label`,
            modifiers: [`phone`],
          })}
        >
          <input
            className={getClasses({block: `calculator`, element: `field`})}
            type="tel"
            name="phone"
            placeholder="Телефон"
            onChange={onChange}
            value={fields.phone || ``}
            required
            pattern="8[0-9]{10}"
            title="8XXXXXXXXXX"
          />
          <span className="visually-hidden">Телефон</span>
        </label>
        <label className={getClasses({block, element: `label`})}>
          <input
            className={getClasses({block: `calculator`, element: `field`})}
            type="email"
            name="mail"
            required
            onChange={onChange}
            placeholder="E-mail"
            value={fields.mail || ``}
          />
          <span className="visually-hidden">E-mail</span>
        </label>
        <button
          type="submit"
          className={getClasses({block: `button`, modifiers: [`main`]})}
        >
          Отправить
        </button>
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
