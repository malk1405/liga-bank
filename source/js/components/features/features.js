import React from 'react';
import Tabs from '../tabs/tabs';
import config from './tabs';
import Panel from './panel';

function Features() {
  const className = `features`;
  return (
    <section className={className}>
      <h2 className="visually-hidden">Преимущества</h2>
      <Tabs config={config} className={className} Panel={Panel} hasAutoChange></Tabs>
    </section>
  );
}

export default Features;
