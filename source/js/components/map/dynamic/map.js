import React, {useContext} from 'react';
import {YMaps, Map as YandexMap, Placemark} from 'react-yandex-maps';

import SvgUrlLg from '../../../../img/svg/url/location--lg.svg';
import SvgUrlSm from '../../../../img/svg/url/location--sm.svg';
import MediaContext from '../../../context/media';

const icons = {
  phone: {
    svg: SvgUrlSm,
    size: [31, 35]
  },
  desktop: {
    svg: SvgUrlLg,
    size: [37, 42]
  }
};

function DynamicMap() {
  const {isPhone} = useContext(MediaContext);
  const {svg, size} = isPhone ? icons.phone : icons.desktop;

  return (
    <YMaps>
      <div>
        <YandexMap
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 5,
          }}
        >
          <Placemark
            geometry={[55.684758, 37.738521]}
            options={{
              iconLayout: `default#image`,
              iconImageHref: svg,
              iconImageSize: size,
            }}
          />
        </YandexMap>
      </div>
    </YMaps>
  );
}

export default DynamicMap;
