import React, { Component } from 'react'
import AuthContext from './auth-context.js'
import { Redirect } from 'react-router-dom'
export default class NewUser extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            username: "",
            password: "",
        }
    }

    handleChange(e) {
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    save(e) {
        e.preventDefault();
        if (this.state.username.trim().length === 0 || this.state.password.trim().length === 0) {
            if (this.state.username.trim().length === 0) {
                alert('Username must not be empty')
            }
            else if (this.state.password.trim().length === 0) {
                alert('Password must not be empty')
            }
            return;
        }
        const token = this.context.token
        var url = 'https://api-easyprice.herokuapp.com/api/v1/users/signup'
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        if (!this.state.password.match(regex)) {
            alert('Password must has between 8 to 20 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
        }
        else if (!this.state.username.match(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)) {
            alert('- Username can consist of lowercase and capitals \n- Username can consist of alphanumeric characters \n- Username can consist of underscore, hyphens, spaces \n- Cannot be two underscores, two hyens or two spaces in a row \n- Cannot have a underscore. hypen or space at the start or end')
        }
        else {
            fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ username: this.state.username, password: this.state.password })
            })
                .then(res => {
                    if (res.status == 409) {
                        throw new Error('Username already existed'),
                        alert('Username already existed')
                    } else {
                        alert('User added! You will be redirected back to the login page.');
                        var url = "http://localhost:3000/Login";
                        window.location = url;
                        // <Redirect from='/Register' to='/Login' exact />
                    }
                })
        }

    }

    render() {
        return (
            <div className="login-page mt-0 pt-0">
                <div className="form-group">
                    <form className='login-form'>
                        <h2 className="text-center">
                            REGISTER
                        </h2>
                        <br />
                        <label for="username">Username</label>
                        <input type="text" className="rounded-pill form-control" id="username" name="username" value={this.state.username} placeholder="Enter username ..." onChange={this.handleChange.bind(this)} title='- Username can consist of lowercase, capitals and alphanumeric characters &#010;- Username can consist of underscore, hyphens, spaces &#010;- Cannot be two underscores, two hyens or two spaces in a row &#010;- Cannot have a underscore. hypen or space at the start or end' />
                        <label for="password">Password</label>
                        <input type="password" className="rounded-pill form-control" id="password" name="password" value={this.state.password} placeholder="Enter password ..." onChange={this.handleChange.bind(this)} title="- Password must has between 8 to 20 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character" />

                        <button type="submit" className="rounded-pill btn-block z-depth-0 my-4 waves-effect btn-success" onClick={this.save.bind(this)}>Sign up</button>

                    </form>
                </div>
            </div>
        )
    }
}