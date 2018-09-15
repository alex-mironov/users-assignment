import React, { Component } from 'react'
import styled from 'styled-components'

import Dashboard from './Dashboard'
import logo from './assets/images/logo.png'
import './App.css'

const Container = styled.div`
  background-color: #f8f8f8;
  min-height: 100vh;
`

class App extends Component {
  render() {
    return (
      <Container className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OpenOceanStudio: Crew Applications</h1>
        </header>
        
        <Dashboard />
      </Container>
    )
  }
}

export default App
