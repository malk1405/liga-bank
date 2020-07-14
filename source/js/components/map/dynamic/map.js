import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import {YMaps, Map as YandexMap, Placemark} from 'react-yandex-maps';

import SvgUrlLg from '../../../../img/svg/url/location--lg.svg';
import SvgUrlSm from '../../../../img/svg/url/location--sm.svg';
import MediaContext from '../../../context/media';

const icons = {
  phone: {
    svg: SvgUrlSm,
    size: [31, 35],
    offset: [-15, -35]
  },
  desktop: {
    svg: SvgUrlLg,
    size: [37, 42],
    offset: [-18, -42]
  },
};

function DynamicMap({locations}) {
  const {isPhone} = useContext(MediaContext);
  const {svg, size, offset} = isPhone ? icons.phone : icons.desktop;

  return (
    <YMaps>
      <div>
        <YandexMap
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 3,
          }}
        >
          {locations.map(({geometry}) => (
            <Placemark
              key={JSON.stringify(geometry)}
              geometry={geometry}
              options={{
                iconLayout: `default#image`,
                iconImageHref: svg,
                iconImageSize: size,
                iconImageOffset: offset
              }}
            />
          ))}
        </YandexMap>
      </div>
    </YMaps>
  );
}

DynamicMap.defaultProps = {
  locations: [],
};

DynamicMap.propTypes = {
  locations: PropTypes.arrayOf(
      PropTypes.shape({
        geometry: PropTypes.arrayOf(PropTypes.number),
      })
  ),
};

export default DynamicMap;
