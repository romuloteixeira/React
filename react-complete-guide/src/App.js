import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Wil', age: 46},
      {name: 'Rose', age: 17}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    // console.log("Was clicked! Passed here.");
    // DON'T DO THIS:  this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Wil', age: 46},
        {name: 'Rose', age: 18}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I`m React App - JSX</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[0].age}>My hobbies: Hource race</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[0].age}></Person>
      </div>
    );

    // return React.CreateElement('div', {className: 'App'}, null);
  }
}

export default App;
