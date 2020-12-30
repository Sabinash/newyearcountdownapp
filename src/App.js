import React, { Component } from 'react';
import Countdown from './Countdown.js';
import './App.css';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="center">
        <h1><span>2021</span><br />New Year Countdown</h1>
        <Countdown date={`${year}-01-01T00:00:00`} />
      </div>
    );
  }
}

export default App;