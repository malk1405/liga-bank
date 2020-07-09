import React, {useState, useEffect} from 'react';

import Header from '../../components/header/header';
import Home from '../pages/home/home';
import MediaContext from '../../context/media';
import Footer from '../../components/footer/footer';

const sizes = {phone: 768, tablet: 1366};
const queries = Object.keys(sizes).map((el) => ({
  type: `is${el.charAt(0).toUpperCase() + el.slice(1)}`,
  query: `(max-width: ${sizes[el]}px)`,
}));

function App() {
  const [media, setMedia] = useState({});

  useEffect(() => {
    queries.forEach(({type, query}) => {
      const mql = window.matchMedia(query);
      mql.addListener(changeMedia);

      changeMedia();

      function changeMedia() {
        setMedia((prevMedia) => {
          return {...prevMedia, [type]: mql.matches};
        });
      }
    });
  }, []);

  return (
    <MediaContext.Provider value={media}>
      <React.Fragment>
        <Header />
        <Home />
        <Footer />
      </React.Fragment>
    </MediaContext.Provider>
  );
}

export default App;
