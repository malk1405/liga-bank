import React, {useState} from 'react';

import departments from './departments';
import CheckBoxes from './dynamic/checkboxes';
import DynamicMap from './dynamic/map';

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

  const onChange = (e) => {
    const {id} = e.target.dataset;
    setConfig((prevConf) => {
      const newConf = [...prevConf];
      newConf[id] = {...newConf[id], checked: !newConf[id].checked};
      return newConf;
    });
  };

  const locations = config.reduce((acc, el) => {
    if (el.checked) {
      return [...acc, ...departments[el.name].locations];
    }
    return acc;
  }, []);

  return (
    <div className="map container">
      <CheckBoxes config={config} onChange={onChange} />
      <DynamicMap locations={locations} />
    </div>
  );
}

export default Map;
