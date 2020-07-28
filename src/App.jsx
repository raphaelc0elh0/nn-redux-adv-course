import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <h1>MarioPlan</h1>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
