import React, { Component } from 'react'
import classes from './App.css'
import Person from '../components/Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Steve', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id)
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let persons = null

    let btnClass = [classes.Button]

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person key={person.id.toString()}
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                change={(event) => this.nameChangedHandler(event, person.id)}
                />
            )
          })}
      </div>
      )
      btnClass.push(classes.Red)
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!!</p>
        <button
          className={btnClass.join(' ')}
          alt={this.state.showPersons.toString()}
          onClick={this.togglePersonsHandler}>Switch Name
          </button>
          {persons}
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App
