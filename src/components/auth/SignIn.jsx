import React, { Component } from 'react'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink ligthen-1 z-depth-0">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
