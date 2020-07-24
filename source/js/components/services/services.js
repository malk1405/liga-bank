import React, {useContext} from 'react';

import config, {block} from './tabs';
import Tabs from '../tabs/tabs';
import Tab from './tab';
import Panel from './panel';

import MediaContext from '../../context/media';

function Services() {
  const {isTablet} = useContext(MediaContext);
  return (
    <section className={`${block} container`}>
      <h2 className="visually-hidden">Услуги</h2>
      <Tabs
        config={config}
        block={block}
        Tab={Tab}
        Panel={Panel}
        autoChangeTimeout={0}
        hasSwipe={isTablet}
      ></Tabs>
    </section>
  );
}

export default Services;
