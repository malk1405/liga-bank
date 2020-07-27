import React, {useState} from 'react';
import PropTypes from 'prop-types';
import creditTypes from './credit-types';
import getClasses from '../../utils/getClasses';
import {block} from './calculator';

function StepOne({onChange, id}) {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibilty = () => {
    setIsVisible((v) => !v);
  };

  const handleClick = (e) => {
    const {id: newId} = e.target.dataset;
    setIsVisible(false);

    if (!newId) {
      onChange(null);
    } else {
      onChange(Number(newId));
    }
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className={getClasses({
          block,
          element: `field`,
          modifiers: isVisible ? [`first`] : [],
        })}
        onClick={handleVisibilty}
      >
        {!creditTypes[id] ? `Выберите цель кредита` : creditTypes[id].title}
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
    </React.Fragment>
  );
}

StepOne.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number,
};

export default StepOne;
