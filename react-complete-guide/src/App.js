import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Wil', age: 46},
      {name: 'Rose', age: 17}
    ]
  });
  const [ otherState, setOtherState ] = useState({otherState: 'some other value'});
  // const [ otherState, setOtherState ] = useState('some other value');

  // console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("Was clicked! Passed here.");
    // DON'T DO THIS:  this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Wil', age: 46},
        {name: 'Rose', age: 18}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I`m React App - JSX</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[0].age}>My hobbies: Hource race</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[0].age}></Person>
    </div>
  );
  // return React.CreateElement('div', {className: 'App'}, null);
}

export default app;
