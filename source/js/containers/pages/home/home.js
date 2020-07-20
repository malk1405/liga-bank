import React from 'react';

import Departments from '../../../components/departments/departments';
import Features from '../../../components/features/features';

function Home() {
  return (
    <React.Fragment>
      <main>
        <h1 className="visually-hidden">Лига Банк</h1>
        <Features></Features>
        <Departments></Departments>
      </main>
    </React.Fragment>
  );
}

export default Home;
