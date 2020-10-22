import React from 'react';
import Cell from './Cell';

function Row(props) {

    return (
        <div className="row">
            {props.row.map((cell, y) => (
                <Cell cell={cell} toggleAlive={props.toggleAlive} x={props.x} y={y}/>
            ))}

        </div>
    )
}

export default Row;