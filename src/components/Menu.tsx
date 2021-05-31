import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/menu.css"
import "../styles/app.css"


const Menu = () => {
    return(
        <nav className="menu-component">
            <ul className="menu-todo-list">
                <li><NavLink to="/todos">All todos</NavLink></li>
                <li><NavLink to="/completed">Completed todos</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu