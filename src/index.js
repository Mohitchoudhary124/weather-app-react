import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Api from './Api';
import Api1 from './Api1';
import Api2 from './Api2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
     {/* <Api /> */}
     {/* <Api1 /> */}
     <Api2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//    reportWebVitals();
