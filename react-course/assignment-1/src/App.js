import React, { useState } from 'react'
import './App.css'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = props => {
    const [ personsState, setPersonsState ] = useState({
      persons: [
        {
          name: 'Steve',
          userName: 'steveg887'
        }
      ]
    })

    const switchPersonHandler = (event) => {
      setPersonsState({
        persons: [
          {
            name: 'Steve',
            userName: event.target.value
          }
        ]
      })
    }

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <UserInput 
          change={switchPersonHandler}
          userName={personsState.persons[0].userName}/>
        <UserOutput 
          userName={personsState.persons[0].userName}/>
        <UserOutput />
        <UserOutput />
        <button style={style}>Click me I'm Irish</button>
      </div>
    )
}

export default App

