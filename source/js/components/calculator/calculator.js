import React, {useState} from 'react';
import StepOne from './step-one';

function Calculator() {
  const [id, setId] = useState(null);
  const onChange = (newId) => {
    setId(newId);
  };

  return (
    <section className="section" id="calculator">

      <h2>Кредитный калькулятор</h2>

      <StepOne id={id} onChange={onChange}></StepOne>
    </section>
  );
}

export default Calculator;
