import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Home';
import About from './components/About';
import Cities from './components/Cities';
import Navigation from './components/Navigation/index';

const RouterApp = () => {
  const cityName = "Seoul";
  return (
    <div>
      <Navigation />
      <Header cityName={cityName} />
      <p>Hello world!</p>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/cities" component={Cities} />
    </div>
  );
};
export default RouterApp;