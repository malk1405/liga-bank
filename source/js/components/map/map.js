import React, {useState, useCallback} from 'react';

import DynamicMap from './dynamic/map';
import StaticMap from './static/map';
import Toggle from './static/toggle';

function Map() {
  const [isDynamic, setIsDynamic] = useState(false);

  const toggleDynamic = useCallback(() => {
    setIsDynamic((value) => !value);
  }, [setIsDynamic]);

  return (
    <div className="map">
      <div>
        {isDynamic ? <div>Чекбоксы</div> : <Toggle onClick={toggleDynamic} />}
      </div>
      {isDynamic ? <DynamicMap locations={[{geometry: [55.751574, 37.573856]}, {geometry: [56.751574, 38.573856]}]} /> : <StaticMap />}
    </div>
  );
}

export default Map;
