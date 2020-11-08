import React from 'react'
import bomb from './bomb.svg'
import './Header.css'

function Header(){
    return <div className="Header">
        <span className="title">Minesweeper</span>
        <img src={bomb} alt="bomb" />
    </div>
}

export default Header;