import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I`m React App - JSX</h1>
        <p>This is really working!</p>
        <Person name="Max" age="20" />
        <Person name="Wil" age="46">My hobbies: Hource race</Person>
        <Person name="Rose" age="17"></Person>
      </div>
    );

    // return React.CreateElement('div', {className: 'App'}, null);
  }
}

export default App;
