import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import creditTypes from './credit-types';
import getClasses from '../../utils/getClasses';
import {block} from './calculator';
import NumberContainer from './number/container';
import SVG from '../../../img/svg/inline/menu.svg';

function StepOne({onChange, id, buttonRef}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilty = () => {
    setIsVisible((v) => !v);
  };

  const handleClick = (e) => {
    const {id: newId} = e.target.dataset;
    setIsVisible(false);

    onChange(Number(newId));
    buttonRef.current.focus();
  };

  const blurTimeout = useRef(null);

  const clearBlurTimeout = () => {
    clearTimeout(blurTimeout.current);
  };

  useEffect(() => {
    return () => {
      clearBlurTimeout();
    };
  }, [blurTimeout]);

  const onBlur = () => {
    blurTimeout.current = setTimeout(() => {
      setIsVisible(false);
    }, 0);
  };

  const onFocus = () => {
    clearBlurTimeout();
    setIsVisible(true);
  };

  return (
    <NumberContainer>
      <button
        type="button"
        ref={buttonRef}
        className={getClasses({
          block,
          element: `field`,
          modifiers: isVisible ? [`first`] : [],
        })}
        onClick={handleVisibilty}
        onBlur={onBlur}
        onFocus={clearBlurTimeout}
      >
        {!creditTypes[id] ? `Выберите цель кредита` : creditTypes[id].title}
        <SVG
          className={getClasses({
            block,
            element: `menu`,
            modifiers: isVisible ? [`visible`] : [],
          })}
        />
      </button>

      {isVisible && (
        <ul className={`list ${getClasses({block, element: `options`})}`}>
          {creditTypes
            .filter(({id: i}) => i !== id)
            .map(({title, id: i}, index, arr) => {
              const modifiers = [`option`];
              if (index === arr.length - 1) {
                modifiers.push(`last`);
              }
              return (
                <li key={i}>
                  <button
                    type="button"
                    className={getClasses({
                      block,
                      element: `field`,
                      modifiers,
                    })}
                    onClick={handleClick}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    data-id={i}
                  >
                    {title}
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </NumberContainer>
  );
}

StepOne.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number,
  buttonRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
};

export default StepOne;
