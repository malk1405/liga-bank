import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import creditTypes from './credit-types';

function StepTwo({id}) {
  useEffect(() => {}, [id]);

  if (!creditTypes[id]) {
    return `Ошибка`;
  }

  return `Hello`;
}

export default StepTwo;
