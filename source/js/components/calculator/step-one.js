import React, {useState} from 'react';
import PropTypes from 'prop-types';
import creditTypes from './credit-types';
import getClasses from '../../utils/getClasses';
import {block} from './calculator';
import NumberContainer from './number/container';
import noop from '../../utils/noop';
import SVG from '../../../img/svg/inline/menu.svg';

function StepOne({onChange, id, buttonRef}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilty = !isVisible
    ? () => {
      setIsVisible(true);

      function onClick() {
        setIsVisible(false);
        document.removeEventListener(`click`, onClick);
      }
      document.addEventListener(`click`, onClick);
    }
    : noop;

  const handleClick = (e) => {
    const {id: newId} = e.target.dataset;

    if (!newId) {
      onChange(null);
    } else {
      onChange(Number(newId));
    }
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
