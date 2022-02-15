import React from 'react';      // package 
import ReactDOM from 'react-dom';      // ReactDOM( object)
import './App.css';       //file name
import App from './App'; 


ReactDOM.render(         // show somthing on d screen
  <React.StrictMode> 
    <App />            {/*html tages and executing function slef closing */}
  </React.StrictMode>,
  document.getElementById('root') 
);

