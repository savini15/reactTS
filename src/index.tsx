import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './02ts&class/01state';
// import App from './02ts&class/2props';
// import App from './03fn&ts/01state';
import App from './04router&ts/index';
import reportWebVitals from './reportWebVitals';
import Demo from './ts/1-basic'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
