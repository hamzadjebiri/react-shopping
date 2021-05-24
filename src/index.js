import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shopping from './components/shopping/shopping';
import reportWebVitals from './reportWebVitals';

import ErrorBoundary from './components/ErrorBoundary'

// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Shopping />
     </ErrorBoundary>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
