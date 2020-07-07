import React from 'react';

import {YMaps, Map as YandexMap} from 'react-yandex-maps';

function DynamicMap() {
  return (
    <YMaps>
      <div>
        <YandexMap defaultState={{center: [55.75, 37.57], zoom: 9}} />
      </div>
    </YMaps>
  );
}

export default DynamicMap;
