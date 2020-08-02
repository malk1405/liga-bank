import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import Logo from '../../../img/svg/inline/logo-ext.svg';
import Icon from '../../../img/svg/inline/show.svg';
import Field from './field';

const block = `login`;

const inputs = {
  login: {
    label: `Логин`,
    type: `text`,
    minLength: 3,
    maxLength: 40,
  },
  password: {
    label: `Пароль`,
    type: `password`,
    minLength: 6,
    maxLength: 40,
  },
};

const hasNoSpaces = (v) => !/\s/.test(v);

function LoginForm({onSubmit, inputRef}) {
  const [fields, setFields] = useState({});
  const [isShown, setIsShown] = useState(false);
  const [wasInvalid, setWasInvalid] = useState(false);

  const handleInvalid = () => {
    setWasInvalid(true);
  };

  const onChange = ({name, value}) => {
    setFields((prev) => {
      return {...prev, [name]: value};
    });
  };

  const showPassword = () => {
    setIsShown(true);
  };

  const hidePassword = () => {
    setIsShown(false);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(`user`, JSON.stringify(fields));
    onSubmit();
  };

  const getConfig = ({name, ref, type}) => ({
    name,
    inputRef: ref,
    ...inputs[name],
    type: type || inputs[name].type,
    onChange,
    value: fields[name],
    validate: hasNoSpaces,
    wasInvalid,
  });

  return (
    <div className={block}>
      <Logo className={getClasses({block, element: `logo`})} />
      <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
        <div className={getClasses({block, element: `form`})}>
          <div className={getClasses({block, element: `fields`})}>
            <Field {...getConfig({name: `login`, ref: inputRef})} />
            <div
              className={getClasses({
                block,
                element: `label-container`,
              })}
            >
              <Field
                {...getConfig({
                  name: `password`,
                  type: isShown ? `text` : null,
                })}
              />
              <button
                type="button"
                title="Показать пароль"
                className={`button ${getClasses({block, element: `icon`})}`}
                disabled={!fields.password || !fields.password.length}
                onMouseDown={showPassword}
                onKeyDown={showPassword}
                onTouchStart={showPassword}
                onBlur={hidePassword}
                onMouseLeave={hidePassword}
                onTouchEnd={hidePassword}
                onKeyUp={hidePassword}
                onMouseUp={hidePassword}
              >
                <Icon />
              </button>
            </div>
          </div>
          <a
            href="#"
            className={`link ${getClasses({block, element: `link`})}`}
          >
            Забыли пароль?
          </a>
          <button
            type="submit"
            className={`${getClasses({
              block: `button`,
              modifiers: [`main`],
            })} ${getClasses({block: `login`, element: `button`})}`}
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
};

export {block};

export default LoginForm;
