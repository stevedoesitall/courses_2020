import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import './App.css'

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    
    this.setState({ loading: true })

    const response = await fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    const data = await response.json()
    console.log(data)

    this.setState({
      users: data,
      loading: false
    })

  }

  render() {
    return (
      <nav className="App">
        <Navbar/>
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </nav>
    )
  } 
}

export default App