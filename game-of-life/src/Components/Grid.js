import React, { useState, useEffect } from 'react';
import Row from './Row';
import { connect } from 'react-redux';
import { toggleAlive } from '../Actions/index';

function Grid(props) {
    const [grid, setGrid] = useState([])

    useEffect(() => {
        setGrid(props.currentGrid)
    }, [props.currentGrid]);
    return (
        <div>
            {grid.map((row, x) => (
                <Row row={row} toggleAlive={props.toggleAlive} x={x} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentGrid: state.currentGrid
    }
}

export default connect(mapStateToProps, {toggleAlive})(Grid)