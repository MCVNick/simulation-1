import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import './reset.css'
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Dashboard />
        </div>
      </Router>
    );
  }
}

export default App;
