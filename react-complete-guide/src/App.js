import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I`m React App - JSX</h1>
        <p>This is really working!</p>
        <Person />
      </div>
    );

    // return React.CreateElement('div', {className: 'App'}, null);
  }
}

export default App;
