import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';
import 'promise-polyfill/src/polyfill';

ReactDOM.render(<App />, document.querySelector(`#root`));
