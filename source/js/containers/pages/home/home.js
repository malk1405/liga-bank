import React from 'react';

import Departments from '../../../components/departments/departments';
import Features from '../../../components/features/features';
import Services from '../../../components/services/services';
import Calculator from '../../../components/calculator/calculator';

function Home() {
  return (
    <React.Fragment>
      <main>
        <h1 className="visually-hidden">Лига Банк</h1>
        <Features></Features>
        <Services></Services>
        <Calculator></Calculator>
        <Departments></Departments>
      </main>
    </React.Fragment>
  );
}

export default Home;
