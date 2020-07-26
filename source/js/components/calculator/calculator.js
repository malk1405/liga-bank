import React, {useState} from 'react';
import Step from './step';
import StepOne from './step-one';

function Calculator() {
  const [id, setId] = useState(null);
  const onChange = (newId) => {
    setId(newId);
  };

  return (
    <section className="section" id="calculator">
      <h2>Кредитный калькулятор</h2>
      <Step num={1} title="Цель кредита">
        <StepOne id={id} onChange={onChange}></StepOne>
      </Step>
    </section>
  );
}

export default Calculator;
