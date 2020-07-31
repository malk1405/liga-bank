import React, {useEffect, useRef, useCallback} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';

import SVG from '../../../img/svg/inline/close.svg';
import getClasses from '../../utils/getClasses';
import noop from '../../utils/noop';

const block = `modal`;

function Modal({children, onClose, onCreate, modifiers}) {
  const body = document.body;
  const closeButton = useRef(null);

  const resetFocus = useCallback(() => {
    closeButton.current.focus();
  }, [closeButton]);

  const onFocus = (e) => {
    if (e.target === e.currentTarget) {
      resetFocus();
    }
  };

  useEffect(() => {
    lockBody();
    resetFocus();
    document.addEventListener(`keydown`, onEscape);

    onCreate();
    return () => {
      document.removeEventListener(`keydown`, onEscape);
      unlockBody();
    };

    function onEscape(e) {
      if (e.keyCode === 27) {
        onClose();
      }
    }

    function lockBody() {
      body.dataset.scrollY = getBodyScrollTop();
      body.style.top = `-${body.dataset.scrollY}px`;
      body.classList.add(`body--lock`);

      function getBodyScrollTop() {
        return (
          window.pageYOffset ||
          (document.documentElement && document.documentElement.ScrollTop) ||
          (body && body.scrollTop)
        );
      }
    }

    function unlockBody() {
      body.classList.remove(`body--lock`);
      window.scrollTo(0, body.dataset.scrollY);
      delete body.dataset.scrollY;
      body.style.top = ``;
    }
  }, []);

  return createPortal(
      <section className="modal">
        <div className="visually-hidden" tabIndex="0" onFocus={onFocus}></div>
        <div className="modal-wrapper">
          <div className={getClasses({block, element: `body`, modifiers})}>
            <button
              type="button"
              title="Закрыть"
              ref={closeButton}
              className={`button ${getClasses({
                block,
                element: `close-btn`,
                modifiers,
              })}`}
              onClick={onClose}
            >
              <SVG />
            </button>
            <h2 className="visually-hidden">Модальное окно</h2>
            {children}
          </div>
        </div>
        <div
          className={getClasses({block, element: `backdrop`})}
          onClick={onClose}
          onFocus={onFocus}
          tabIndex="0"
        ></div>
      </section>,
      body
  );
}

Modal.defaultProps = {
  modifiers: [],
  onCreate: noop,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCreate: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

export default Modal;
