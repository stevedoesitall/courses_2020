import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const app = props => {
    const [ personsState, setPersonsState ] = useState({
      persons: [
        {name: 'Steve', age: 33},
        {name: 'Ping', age: 34},
        {name: 'Jon', age: 35}
      ]
    })


    const switchNameHandler = () => {
      //Don't do this: this.state.persons[0].name = 'Stephen'
      //setState can only be used in class-based components
      setPersonsState({
        persons: [
          {name: 'Stephen', age: 33},
          {name: 'Ping', age: 34},
          {name: 'Jon', age: 35}
        ]
      })
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[2].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[2].age}/>
      </div>
    )
}

export default app

