import React from 'react';
import logo from './bomb.svg';
import bombIcon from './bomb.png'
import resetIcon from './reset.png'
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Container">
                    <div className="Control-Panel">
                        <div className="Title">Minesweeper&nbsp;<img src={logo} className="App-logo" alt="logo"
                                                                     width="61" height="60"/></div>
                        <div className="Status-Bar">
                            <div className="Flag-Counter"><img src={bombIcon} alt="bomb icon" width="47"
                                                               height="60"/>&nbsp;<span>10</span></div>
                            <div className="Reset">🙂</div>
                            <div className="Timer"><span>0:00</span></div>
                        </div>
                    </div>
                    <div className="Field">
                        <AddCells x="8" y="9"/>
                    </div>
                </div>
            </header>
        </div>
    );
}

function AddCells(props) {
    let x = props.x;
    let y = props.y;
    let field = [];
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            field.push(<div key={"cell-" + i + "-" + j} className="cell"/>);
        }
    }
    return (field.map(row => row))
}

export default App;
