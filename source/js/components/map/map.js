import React, {useState, useCallback} from 'react';

import DynamicMap from './dynamic/map';
import StaticMap from './static/map';
import Toggle from './static/toggle';
import departments from './departments';
import CheckBoxes from './dynamic/checkboxes';

function generateConfig() {
  return Object.keys(departments).map((key, id) => ({
    id,
    name: key,
    text: departments[key].text,
    checked: true,
  }));
}

function Map() {
  const [config, setConfig] = useState(generateConfig);
  const [isDynamic, setIsDynamic] = useState(false);

  const onChange = (e) => {
    const {id} = e.target.dataset;
    setConfig((prevConf) => {
      const newConf = [...prevConf];
      newConf[id] = {...newConf[id], checked: !newConf[id].checked};
      return newConf;
    });
  };

  const toggleDynamic = useCallback(() => {
    setIsDynamic((value) => !value);
  }, [setIsDynamic]);

  const locations = config.reduce((acc, el) => {
    if (el.checked) {
      return [...acc, ...departments[el.name].locations];
    }
    return acc;
  }, []);


  return (
    <div className="map">
      <div>
        {isDynamic ? (
          <CheckBoxes config={config} onChange={onChange} />
        ) : (
          <Toggle onClick={toggleDynamic} />
        )}
      </div>
      {isDynamic ? (
        <DynamicMap locations={locations} />
      ) : (
        <StaticMap />
      )}
    </div>
  );
}

export default Map;
