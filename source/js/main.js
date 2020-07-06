import React from 'react';
import ReactDOM from 'react-dom';
import 'promise-polyfill/src/polyfill';

import App from './containers/app/app';

ReactDOM.render(<App />, document.querySelector(`#root`));
