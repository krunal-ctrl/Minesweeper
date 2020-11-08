import React, { useState } from 'react';
import "./App.css";
import Header from "./Header";
import ControlPanel from "./ControlPanel";
import Bombs from "./Bombs";

function App() {
    const cellRows = 9;
    const cellColumns = 8;
    const _cells = [];

    for (let i =0; i < cellRows; i++) {
        const row = [];
        for (let j = 0; j < cellColumns; j++) {
            row.push({
               row: i,
               column: j,
               value: 0,
               status: 'closed'
            });
        }
        _cells.push(row);
    }
    const [cells, setCells] = useState(_cells)

    return (
        <div className="App">
            <div className="box">
                <Header />
                <ControlPanel />
                <Bombs
                    cells = {cells}
                    cellClicked={(v) => {
                        const _cells = [...cells];
                        _cells[v.rows][v.column] = v;
                        setCells(_cells);
                    }}
                    />
            </div>
        </div>
    )
}
