import React from "react";
import "./Bombs.css";

function Field({ cell, cellClicked }) {
    // cell value:
    // 0 closed
    // 1 opened
    // 2 flagged flag
    // 3 flagged mine

    return (
        <div
            className={`cell ${cell.status}`}
            onClick={(e) => {
                if (cell.status === "closed") {
                    cellClicked({ ...cell, value: 1, status: "opened" });
                }
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                if (cell.status === "closed") {
                    const flagOrMine = Math.random() > 0.5 ? "flag" : "mine";
                    const value = flagOrMine === "flag" ? 2 : 3;
                    cellClicked({
                        ...cell,
                        value: value,
                        status: `flagged ${flagOrMine}`,
                    });
                }
            }}
        />
    );
}

function Row({ cells, cellClicked }) {
    return (
        <div className="Row">
            {cells.map((item, index) => (
                <Field cellClicked={cellClicked} key={index} cell={item} />
            ))}
        </div>
    );
}

function Bombs({ cells, cellClicked }) {
    return (
        <div className="Bombs">
            {cells.map((item, index) => (
                <Row cellClicked={cellClicked} cells={item} key={index} />
            ))}
        </div>
    );
}

export default Bombs;