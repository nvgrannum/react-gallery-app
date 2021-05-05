import React, {Component} from 'react'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
//import NotFound from './NotFound'


class Nav extends Component {
   
    //include switch to catch incorrect nav
    render() {
        
        return(
        <BrowserRouter>
        <nav class="main-nav">
            <ul>
            <li><a href='#'>Cats</a></li>
            <li><a href='#'>Dogs</a></li>
            <li><a href='#'>Computers</a></li>
            </ul>
        </nav>
        </BrowserRouter>
        )
    }
}

export default Nav