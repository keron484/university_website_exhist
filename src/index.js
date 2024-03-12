import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from "./pages/Home";
import './css/style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
       <Home></Home>
   </React.StrictMode>
);