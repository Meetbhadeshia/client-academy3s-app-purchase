import { useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import "./navbar.css"

function Menu(props) {
    const navigate = useNavigate();

    return (
        <ul className="menu-list">
            <NavLink to={props.link}
                className={"menu-title"}
            >
                {props.title}
            </NavLink>
        </ul>
    );
}
export default Menu;