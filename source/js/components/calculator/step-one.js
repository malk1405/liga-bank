import React, {useState} from 'react';
import PropTypes from 'prop-types';
import creditTypes from './credit-types';

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
      <button type="button" onClick={handleVisibilty}>
        {!creditTypes[id] ? `Выберите цель кредита` : creditTypes[id].title}
      </button>
      {creditTypes[id] && isVisible && (
        <button type="button" onClick={handleClick}>
          Очистить
        </button>
      )}
      {isVisible && (
        <ul>
          {creditTypes
            .filter(({id: i}) => i !== id)
            .map(({title, id: i}) => (
              <li key={i}>
                <button type="button" onClick={handleClick} data-id={i}>
                  {title}
                </button>
              </li>
            ))}
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
