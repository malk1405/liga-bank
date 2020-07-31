import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import Logo from '../../../img/svg/inline/logo-ext.svg';
import Icon from '../../../img/svg/inline/show.svg';

const block = `login`;

function LoginForm({onSubmit, inputRef}) {
  const [fields, setFields] = useState({});
  const [isShown, setIsShown] = useState(false);

  const onChange = ({target: {name, value}}) => {
    setFields((prev) => {
      if (/\s/.test(value)) {
        return prev;
      }

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

  return (
    <div className={block}>
      <Logo className={getClasses({block, element: `logo`})} />
      <form onSubmit={handleSubmit}>
        <div className={getClasses({block, element: `form`})}>
          <div className={getClasses({block, element: `fields`})}>
            <label className={getClasses({block, element: `label`})}>
              <span
                className={`input-label ${getClasses({
                  block,
                  element: `label-text`,
                })}`}
              >
                Логин
              </span>
              <input
                className={`input ${getClasses({block, element: `field`})}`}
                ref={inputRef}
                type="text"
                name="login"
                value={fields.login || ``}
                required
                onChange={onChange}
                minLength={3}
                maxLength={40}
              />
            </label>
            <div
              className={getClasses({
                block,
                element: `label-container`,
              })}
            >
              <label
                className={getClasses({
                  block,
                  element: `label`,
                })}
              >
                <span
                  className={`input-label ${getClasses({
                    block,
                    element: `label-text`,
                  })}`}
                >
                  Пароль
                </span>
                <input
                  className={`input ${getClasses({block, element: `field`})}`}
                  type={isShown ? `text` : `password`}
                  name="password"
                  onChange={onChange}
                  value={fields.password || ``}
                  required
                  minLength={6}
                  maxLength={40}
                />
              </label>
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

export default LoginForm;
