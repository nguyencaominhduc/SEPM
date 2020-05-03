import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from './auth-context.js'

const Navbar = props => (
    <AuthContext.Consumer>
    {(context) => {
        return (
        <ul>

        <li><Link to='/Review'>Review</Link></li>
        <li><Link to='/ProductDetail'>Product Detail</Link></li>
        {/* <li><Link to='/Header'>Header Top</Link></li>*/}
        <li><Link to='/Login'>Login</Link></li> 
        <li><Link to='/HomePage'>Home Page</Link></li>
        <li><Link to='/SearchResult'>Search Result</Link></li>
      </ul>
        )
    }}
    </AuthContext.Consumer>
);
export default Navbar;