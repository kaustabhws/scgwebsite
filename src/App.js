import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/Home';

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </>
    );
  }
}
