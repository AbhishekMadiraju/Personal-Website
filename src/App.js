import React, { Component } from 'react';
import NavBar from './NavBar';
import Info from './Info';
import Test from './Test';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="info">
          <Info />
          <Test />
        </div>
      </div>
    );
  }
}

export default App;
