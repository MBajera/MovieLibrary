import React from 'react'
import {NavLink} from "react-router-dom";

const activeStyle = {
    color: "red",
    fontWeight: "bold"
}

const Navigation = () => {

    return (
        <div>
            <NavLink exact to="/" activeStyle={activeStyle}>SZUKAJ</NavLink>
            <NavLink to="/watched" activeStyle={activeStyle}>OBEJRZANE</NavLink>
            <NavLink to="/to_watch" activeStyle={activeStyle}>DO OBEJRZENIA</NavLink>
        </div>
    )
}

export default Navigation