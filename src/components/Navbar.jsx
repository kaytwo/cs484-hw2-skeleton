import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav(){
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-nav">
                <NavLink className={({isActive}) => "nav-item nav-link" + (isActive ? " active" : "")}
                 to="/" end> Home</NavLink>
                 <NavLink className={({isActive}) => "nav-item nav-link" +  (isActive ? " active" : "")}
                 to="/add"> Add request</NavLink>
                 <NavLink className={({isActive}) => "nav-item nav-link" +  (isActive ? " active" : "")}
                 to="/list"> List requests</NavLink>
            </div>
    </nav>
    )
}

export default Nav;