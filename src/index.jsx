import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App.js';
import reportWebVitals from './setup/reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// To start measuring performance in your app, pass a function
// To log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Check this out to learn more: https://bit.ly/CRA-vitals
reportWebVitals();
