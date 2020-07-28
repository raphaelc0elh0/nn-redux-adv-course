import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
