import React from 'react';
import Tabs from '../tabs/tabs';
import config from './tabs';
import Panel from './panel';

function Features() {
  const block = `features`;
  return (
    <section className={block}>
      <h2 className="visually-hidden">Преимущества</h2>
      <Tabs config={config} block={block} Panel={Panel} hasAutoChange hasSwipe></Tabs>
    </section>
  );
}

export default Features;
