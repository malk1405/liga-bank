import React from 'react';

import Departments from '../../../components/departments/departments';
import Features from '../../../components/features/features';
import Services from '../../../components/services/services';

function Home() {
  return (
    <React.Fragment>
      <main>
        <h1 className="visually-hidden">Лига Банк</h1>
        <Features></Features>
        <Services></Services>
        <Departments></Departments>
      </main>
    </React.Fragment>
  );
}

export default Home;
