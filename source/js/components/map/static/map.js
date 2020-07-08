import React from 'react';

function StaticMap() {
  return (
    <picture className="picture">
      {/* 1x: 320px; 2x: 640px  */}
      <source
        media="(max-width: 767px)"
        srcSet="img/map/map@1x--sm.webp, img/map/map@2x--sm.webp 2x"
        type="image/webp"
      />

      <source
        media="(max-width: 767px)"
        srcSet="img/map/map@1x--sm.jpg, img/map/map@2x--sm.jpg 2x"
      />

      {/* 1x: 678px; 2x: 1356px  */}
      <source
        media="(max-width: 1023px)"
        srcSet="img/map/map@1x--md.webp, img/map/map@2x--md.webp 2x"
        type="image/webp"
      />

      <source
        media="(max-width: 1023px)"
        srcSet="img/map/map@1x--md.jpg, img/map/map@2x--md.jpg 2x"
      />

      {/* 1x: 1170px; 2x: 2340px  */}
      <source
        srcSet="img/map/map@1x--lg.webp, img/map/map@2x--lg.webp 2x"
        type="image/webp"
      />
      <img
        src="img/map/map@1x--lg.jpg"
        srcSet="img/map/map@2x--lg.jpg 2x"
        alt="Карта с месторасположением отделений банка"
        height="462"
        width="1170"
      />
    </picture>
  );
}

export default StaticMap;
