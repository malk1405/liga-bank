import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import creditTypes from './credit-types';

function StepOne({onChange, id}) {
  const [isVisible, setIsVisible] = useState(true);
  const handleVisibilty = () => {
    setIsVisible((v) => !v);
  };

  const handleClick = (e) => {
    const {id: newId} = e.target.dataset;

    if (!newId) {
      onChange(null);
    } else {
      onChange(Number(newId));
    }
  };

  useEffect(() => {
    setIsVisible(false);
  }, [id]);

  return !creditTypes[id] ? (
    <React.Fragment>
      <button type="button" onClick={handleVisibilty}>
        Выберите цель кредита
      </button>
      {isVisible && (
        <ul>
          {creditTypes.map(({title}, i) => (
            <li key={i}>
              <button type="button" onClick={handleClick} data-id={i}>
                {title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  ) : (
    <button type="button" onClick={handleClick}>
      {creditTypes[id].title}
    </button>
  );
}

export default StepOne;
