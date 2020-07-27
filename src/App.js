import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import RouterApp from './RouterApp.js';

function App() {
  const cityName = "Seoul";
  return (
    <BrowserRouter>
      <RouterApp/>
    </BrowserRouter>
  );
}

export default App;
