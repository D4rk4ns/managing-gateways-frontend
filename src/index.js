import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * This file is for desploy to Heroku purposes.
 */
 const express = require("express");
 const favicon = require("express-favicon");
 const path = require("path");
 
 const port = process.env.PORT || 3000;
 const app = express();
 
 // __dirname is the current directory from where the script is running
 app.use(favicon(__dirname + "/public/favicon.ico"));
 app.use(express.static(__dirname));
 app.use(express.static(path.join(__dirname, "public")));
 
 app.get("/*", function(req, res) {
     res.sendFile(path.join(__dirname, "public", "index.html"));
 });
 app.listen(port);
 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
