import React, { Component } from 'react'
import AuthContext from './auth-context.js'
import { Link } from 'react-router-dom'
import Navbar from './Navbar.js';

export default class Auth extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props)
        this.state = {
            message: "",
        }
        this.usernameEl = React.createRef()
        this.passwordEl = React.createRef()
    }

    submitHandler = (event) => {
        event.preventDefault();
        const username = this.usernameEl.current.value;
        const password = this.passwordEl.current.value;
        if (username.trim().length === 0 || password.trim().length === 0) {
            if(username.trim().length === 0){
                alert('Username must not be empty')
            }
            else if (password.trim().length === 0){
                alert('Password must not be empty')
            }
            return;
        }

        fetch('http://localhost:5000/api/v1/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed!'),
                    this.setState({message: "Wrong username or password"})
                }
                return res.json()
            })
            .then(resData => {
                if (resData.token) {
                    this.context.login(resData.token, resData.userID, resData.tokenExpiration)
                    console.log(resData)
                    localStorage.setItem('token', resData.token);
                    localStorage.setItem('username', resData.userID);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
<div>
<div className="col-md-6 col-lg-10 col-xl-7 header-search-box d-none d-lg-block">
            <div
              id="main-menu-2"
              className="main-menu-desktop no-border main-menu-sh"
            >
              <div className="menu-container wd-megamenu text-left">
                <div className="menu">
                  <ul className="wd-megamenu-ul">
                    <li>
                      <Link to='/HomePage' className="main-menu-list">
                        <i
                          className="fa fa-home"
                          aria-hidden="true"
                        ></i>{" "}
                                  Home{"  "}
                      </Link>
                    </li>
                    <li className="pos-inherit">
                    <Link
                        to="/About"
                        className="main-menu-list"
                      >
                        About{"  "}
                      </Link>
                    </li>
                    <li>
                    <Link
                        to="/Contact"
                        className="main-menu-list"
                      >
                        Contact us{"  "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
<div className="login-page mt-0 pt-0">
                <div className="form-group">
                    <form className='login-form' onSubmit={this.submitHandler}>
                        <h2 className="text-center" style={{ color: 'rgb(255,69,0)' }}>
                            LOG IN
                        </h2>
                        <br />
                        <label for="username">Username</label>
                        <input type="text" className="rounded-pill form-control my-2" name="username" id="username" ref={this.usernameEl} placeholder="Enter username" />
                        <label for="password">Password</label>
                        <input type="password" className="rounded-pill form-control my-2" name="password" id="password" ref={this.passwordEl} placeholder="Enter password" />
                        <h5 style={{color: 'red', fontSize: 15 + 'px'}}>{this.state.message}</h5>
                        <button type='submit' className="rounded-pill btn-block z-depth-0 my-4 waves-effect text-light" style={{ backgroundColor: 'rgb(255,69,0)' }}>Sign in</button>
                        <Link to="/Register">No account yet? Register!</Link>
                    </form>
                </div>
            </div>
</div>
        )
    }
}
