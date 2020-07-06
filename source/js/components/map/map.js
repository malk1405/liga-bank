import React from 'react';

import {YMaps, Map as YandexMap} from 'react-yandex-maps';

function Map() {
  return (
    <YMaps>
      <div>
        My awesome application with maps!
        <YandexMap defaultState={{center: [55.75, 37.57], zoom: 9}} />
      </div>
    </YMaps>
  );
}

export default Map;
