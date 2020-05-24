import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { message: '', username: '', password: '' };
  }

  login(){
    if (this.state.username=="admin"){
      this.setState({ message: 'Please wait. Logging in...' });
      fetch('http://localhost:5000/api/v1/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(result => {
          if (result.token != null) {
            localStorage.setItem('token', result.token);
            this.props.dispatch({
              type: 'AUTHENTICATED',
              payload: result.token
            });
          } else
            this.setState({ message: 'Wrong username/password. Please retry' });
        })
        .catch(error => {
          this.setState({ message: 'Remote server is not accessible' });
        });
    }
    else
      this.setState({ message: `Sorry, you don't have access right to this content` });
  }

  handleChange(e) {
    if (event.key === "Enter") {
      this.login()
    }
    else{
      var change = {};
      change[e.target.name] = e.target.value;
      this.setState(change);
    }
  }

  render() {
    return (
      <div>
        <div className="Login">
          <form>
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                name="username"
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                onChange={this.handleChange.bind(this)}
                type="password"
                name="password"
              />
            </FormGroup>
            <Button block bsSize="large" onClick={this.login.bind(this)}>
              Login
            </Button>
          </form>
        </div>
        <div>{this.state.message}</div>
      </div>
    );
  }
}
