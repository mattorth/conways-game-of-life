import React, { useState, useEffect } from 'react';
import Row from './Row';
import { connect } from 'react-redux';
import { toggleAlive, nextGen, clearGrid } from '../Actions/index';
import CountNeighbors from '../Utils/CountHelper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useInterval from '../Utils/useInterval';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Grid(props) {
    const speeds = {
        low: 2000,
        medium: 1000,
        high: 300
    }

    const [grid, setGrid] = useState(props.currentGrid);
    const [isRunning, setIsRunning] = useState(false);
    let [generation, setGeneration] = useState(0);
    const [speed, setSpeed] = useState("medium");
    const [size, setSize] = useState("small");

    useInterval(() => {
        setGeneration(generation + 1);
        nextGen(props.currentGrid)
    }, isRunning ? speeds[speed]: null)

    useEffect(() => {
        setGrid(props.currentGrid)
    }, [props.currentGrid]);


    const step = () => {
        nextGen(props.currentGrid)
        setGeneration(generation + 1);
    }
    const nextGen = (grid) => {
        let newGrid = [];

        let i = 0;
        for(let x =0; x < grid.length; x++) {
            newGrid[x] = [];
            for(let y=0; y < grid.length; y++) {
                newGrid[x][y] = {
                    id: i++,
                    isAlive: false,
                }
            }
        }

        for(let x =0; x < grid.length; x++) {
            for(let y=0; y < grid.length; y++) {
                let neighbors = 0

                neighbors = CountNeighbors(grid, x, y);

                if(grid[x][y].isAlive) {
                    if (neighbors === 2 || neighbors === 3) {
                        newGrid[x][y].isAlive = true;
                    } else {
                        newGrid[x][y].isAlive = false;
                    }
                } else if (!grid[x][y].isAlive) {
                    if (neighbors === 3) {
                        newGrid[x][y].isAlive = true;
                    }
                }
            };
        }
        props.nextGen(newGrid);
    }

    const sizes = {
        small: 25,
        medium: 30,
        large: 35
    }

    const handleSizeChange = e => {
        let i = 0;
        let grid = [];
        setSize(e.target.value);
        for(let x =0; x < sizes[e.target.value]; x++) {
            grid[x] = [];
            for(let y=0; y < sizes[e.target.value]; y++) {
                grid[x][y] = {
                    id: i++,
                    isAlive: false,
                }
            }
        }
        props.nextGen(grid)
    }
    const clear = () => {
        let i = 0;
        const newGrid = [];
        for(let x =0; x < props.currentGrid.length; x++) {
            newGrid[x] = [];
            for(let y=0; y < props.currentGrid.length; y++) {
                newGrid[x][y] = {
                    id: i++,
                    isAlive: false,
                }
            }
        }
        props.clearGrid(newGrid);
        setGeneration(0);

    }

    const start = e => {
        e.preventDefault();
        setIsRunning(true);
        console.log("start", isRunning);
    }

    const stop = e => {
        e.preventDefault();
        setIsRunning(false);
        console.log("stop", isRunning);
    }

    const handleSpeedChange = e => {
        setSpeed(e.target.value);
        console.log(e.target.value)
    }

    return (
        <div className="container">
            <div className="rules">
                <h2>Rules</h2>
                <ul>
                    <li>If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.</li>
                    <li>If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.</li>
                </ul>
            </div>
            <div className="grid">
                {grid.map((row, x) => (
                    <Row key={x} row={row} toggleAlive={props.toggleAlive} isRunning={isRunning} x={x} />
                ))}
                <h1>Generation: {generation}</h1>
                <ButtonGroup variant="contained" size="large" color="primary" aria-label="large contained primary button group">
                    <Button onClick={start}>Start</Button>
                    <Button onClick={stop}>Pause</Button>
                    <Button onClick={clear}>Clear</Button>
                    <Button onClick={step}>Next Gen</Button>
                </ButtonGroup>
            </div>
            <div className="options">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Speed</FormLabel>
                    <RadioGroup row aria-label="speed" name="speed" value={speed} onChange={handleSpeedChange}>
                        <FormControlLabel value="low" control={<Radio />} label="Low" />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="high" control={<Radio />} label="High" />
                    </RadioGroup>
                    <FormLabel component="legend">Size</FormLabel>
                    <RadioGroup row aria-label="size" name="size" value={size} onChange={handleSizeChange}>
                        <FormControlLabel value="small" control={<Radio />} label="Small" />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="large" control={<Radio />} label="Large" />
                    </RadioGroup>
                </FormControl>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentGrid: state.currentGrid
    };
};

export default connect(mapStateToProps, {toggleAlive, nextGen, clearGrid})(Grid);