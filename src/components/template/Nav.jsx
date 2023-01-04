import React from "react";
import './Nav.css';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href = "#/">
                <i className="fa fa-home"> Start </i>
            </a>
            <a href = "#/users">
                <i className="fa fa-home"> Users </i>
            </a>
        </nav>
    </aside>