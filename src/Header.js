import Rect from 'react';
import bomb from 'bomb.svg'
import './Header.css';
import React from "react";

function Header() {
    return <div className="Header">
        <span className="title">Minesweeper</span>
        <img src={bomb} alt="bomb"/>
    </div>
}
export default Header;