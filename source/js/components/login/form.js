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
    <div>
      <Logo />
      <form onSubmit={handleSubmit}>
        <div className={getClasses({block, element: `fields`})}>
          <label className={getClasses({block, element: `label`})}>
            <span className={getClasses({block, element: `label-text`})}>
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
          <div>
            <label
              className={getClasses({
                block,
                element: `label`,
                modifiers: [`phone`],
              })}
            >
              <span className={getClasses({block, element: `label-text`})}>
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
              <button
                type="button"
                title="Показать пароль"
                className="button"
                onKeyDown={showPassword}
                onKeyUp={hidePassword}
                onBlur={hidePassword}
                onMouseDown={showPassword}
                onMouseLeave={hidePassword}
                onMouseUp={hidePassword}
              ><Icon /></button>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className={getClasses({block: `button`, modifiers: [`main`]})}
        >
          Войти
        </button>
        <a href="#" className="link">
          Забыли пароль?
        </a>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
};

export default LoginForm;
