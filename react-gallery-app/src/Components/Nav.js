import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends Component {
   
    render() {
        
        return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/flowers'>Flowers</NavLink></li>
                <li><NavLink to='/puppies'>Puppies</NavLink></li>
                <li><NavLink to='/forests'>Forests</NavLink></li>
            </ul>
        </nav>
        )
    }
}

export default Nav