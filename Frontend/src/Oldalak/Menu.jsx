import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Menu.css";


const Menu = () => {
    const [menuOPen,setMenuOPen]= useState(false)
    return (
        <nav>
            <Link to="/" className="title">Címoldal</Link>
            <div className="menu" onClick={() =>
            {
                setMenuOPen(!menuOPen);
            }
            }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOPen ? "open" : ""}>
                <li>
                    <NavLink to="/">Főoldal</NavLink>
                </li>
                <li>
                    <NavLink to="/felvettek/:agazat">Felvettek</NavLink>
                </li>

            </ul>

        </nav>
    );

};

export default Menu;