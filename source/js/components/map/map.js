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
      {isDynamic ? <DynamicMap /> : <StaticMap />}
    </div>
  );
}

export default Map;
