import React from 'react'
import './App.css'
import { useState } from 'react'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

const App = (props) => {
  const [inputState, updateInputStateNum] = useState({
    userInput: ''
  })

  const setInputNum = (event) => {
    const inputVal = event.target.value
    updateInputStateNum({
      userInput: inputVal
    })
  }

  const deleteLetter = (index) => {
    const letters = [...inputState.userInput]
    letters.splice(index, 1)
    const updatedLetters = letters.join('')
    updateInputStateNum({userInput: updatedLetters})
  }

  let inputBlocks = null

  inputBlocks = (
    <div>
       {inputState.userInput.split('').map((el, index) => {
        return (
        <CharComponent
          letter={el}
          key={index}
          click={deleteLetter.bind(null, index)}
        />
        )
      })}
    </div>
  )

  return (
    <div className="App">
      <input type="text" value={inputState.userInput} onChange={setInputNum} />
      <p>Total Characters: {inputState.userInput.length}</p>
      <ValidationComponent
        length={inputState.userInput.length}
      />
      {inputBlocks}
    </div>
  )
}

export default App
