import React from 'react';
import logo from './bomb.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          className="App-text"
          target="_blank"
          rel="noopener noreferrer"
        >
            Minesweeper is loading...
        </p>
      </header>
    </div>
  );
}

export default App;
