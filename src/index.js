import React from 'react';
import ReactDOM from 'react-dom/client';
import Carusel from './components/Carusel';
import Navbar from './components/Navbar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Carusel/>
  </React.StrictMode>
);

