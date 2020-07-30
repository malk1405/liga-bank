import React from 'react';
import Map from '../map/map';

const block = `departments`;

function Departments() {
  return (
    <section id="departments" className={`${block} section`}>
      <div className="container">
        <h2>Отделения Лига Банка</h2>
      </div>
      <Map></Map>
    </section>
  );
}

export {block};

export default Departments;
