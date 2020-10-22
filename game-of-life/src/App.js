import React, { useEffect, useState } from 'react';
import './App.css';
import Grid from './Components/Grid';

// Make Grid 25x25
    // Columns
    // Rows - map over array of status(alive/dead) with cells
        // Cells

// Two states
    // Dead - White
    // Alive - Black
	// Click to switch, toggle classes ??
	// take in row, column

// Must keep track of current and previous generation (state)
// Use timeout function to move through generations
    // Start button
        // Triggers Game
        // examine eight neighbors, apply rules
        // when loop completes swap current and next grids
        // repeat until simulation is stopped
    // Stop button
    // Clear Button
function App() {
	// const [currentGrid, setCurrentGrid ] = useState();
	// const [previousGrid, setPreviousGrid ] = useState();

	return (
		<div className="App">
			<Grid />
		</div>
  );
}

export default App;
