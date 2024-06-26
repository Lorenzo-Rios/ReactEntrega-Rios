import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './script/App';
import reportWebVitals from './script/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
