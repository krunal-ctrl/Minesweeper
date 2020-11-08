import React from 'react'
import bomb from './bomb.svg'
import './ControlPanel.css'

function ControlPanel() {
    return <div className="Control">
        <div className="flagCounter">
            <img src={bomb} alt=""/>
            <span>10</span>
        </div>
        <button>reset</button>
        <span className="Timer">0:00</span>
    </div>
}

export default ControlPanel;