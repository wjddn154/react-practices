import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

function App() {
  //react를 사용하고 있진 않지만, createElement로 바뀌기 때문에 react를 import해줘야함 아니면 오류
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          'Hello React!!!'
        </a>
      </header>
    </div>
  );
}

export default App;
