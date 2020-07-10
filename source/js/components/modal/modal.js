import React, {useEffect, useRef, useCallback} from 'react';
import {createPortal} from 'react-dom';

function Modal({children, onClose}) {
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
      <section className="section modal" tabIndex="0" onFocus={onFocus}>
        <div className="modal-wrapper">
          <div className="modal__body">
            <button
              type="button"
              title="Закрыть"
              ref={closeButton}
              className="button modal__close-btn"
              onClick={onClose}
            >
                        Закрыть
            </button>
            <h2 className="visually-hidden">Модальное окно</h2>
            {children}
          </div>
        </div>
        <div className="modal__backdrop" onClick={onClose} onFocus={onFocus} tabIndex="0"></div>
      </section>,
      body
  );
}

export default Modal;
