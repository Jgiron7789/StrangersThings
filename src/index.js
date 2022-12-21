import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDomClient from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDomClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);