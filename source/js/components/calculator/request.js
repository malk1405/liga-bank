import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import Step from './step';
import {block as container} from './calculator';
import Input from '../input/input';

const block = `request`;

const inputs = [
  {
    type: `text`,
    name: `name`,
    placeholder: `ФИО`,
    minLength: 3,
    maxLength: 40,
    validate(v) {
      return !/\d/.test(v);
    },
  },
  {
    type: `tel`,
    name: `phone`,
    placeholder: `Телефон`,
    maxLength: 11,
    pattern: `8[0-9]{10}`,
    title: `8XXXXXXXXXX`,
    validate(v) {
      return !/\D/.test(v);
    },
  },
  {
    type: `email`,
    name: `mail`,
    placeholder: `E-mail`,
  },
];

function Request({items, onSubmit, inputRef}) {
  const [fields, setFields] = useState({});
  const [error, setError] = useState(false);
  const [wasInvalid, setWasInvalid] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInvalid = () => {
    setError(true);
    setWasInvalid(true);
  };

  useEffect(() => {
    if (!error) {
      return () => {};
    }
    const timeout = setTimeout(() => {
      setError(false);
    }, 400);
    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  const onChange = ({name, value}) => {
    setFields((prev) => {
      return {...prev, [name]: value};
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(fields);
  };

  const blockModifiers = error ? [`error`] : [];

  return (
    <div
      className={`${getClasses({
        block: container,
        element: block,
      })} ${getClasses({block, modifiers: blockModifiers})}`}
    >
      <Step num={3} title="Оформление заявки">
        <dl className={getClasses({block, element: `list`})}>
          {items.map(({title, value}, i) =>
            value ? (
              <div className={getClasses({block, element: `item`})} key={i}>
                <dt className={getClasses({block, element: `title`})}>
                  {title}
                </dt>
                <dd className={getClasses({block, element: `value`})}>
                  {value}
                </dd>
              </div>
            ) : null
          )}
        </dl>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          onInvalid={handleInvalid}
        >
          <div className={getClasses({block, element: `fields`})}>
            {inputs.map((el, i) => (
              <React.Fragment key={i}>
                <label className={getClasses({block, element: `label`})}>
                  <Input
                    inputRef={i === 0 ? inputRef : null}
                    {...el}
                    classes={getClasses({block, element: `field`})}
                    value={fields[el.name]}
                    onChange={onChange}
                    required
                    wasInvalid={wasInvalid}
                  />
                  <span className="visually-hidden">{el.placeholder}</span>
                </label>
              </React.Fragment>
            ))}
          </div>
          <button
            type="submit"
            className={`${getClasses({
              block: `button`,
              modifiers: [`main`],
            })} ${getClasses({block, element: `button`})}`}
          >
            Отправить
          </button>
        </form>
      </Step>
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
