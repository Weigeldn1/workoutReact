// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  //render a react element or componen into a specific DOM element, renders content of the App component into the HTML element with id="root"
  //React.StrictMode: Does not render any visible UI components, its a special wrapper component: 
  //helps higlighting potential problems in your app, performs various checks and warnings 
  <React.StrictMode>

    <App />
  </React.StrictMode>,
  document.getElementById('root')//it's looking for an HTML element with the id = "root", where the react app will be injected/displayed
); 
