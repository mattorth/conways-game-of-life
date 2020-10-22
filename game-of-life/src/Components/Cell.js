import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { toggleAlive } from '../Actions/index';

// Fixed square
// two states
function Cell(props) {

	const [alive, setAlive] = useState(false)

	const toggleAlive = e => {
		props.toggleAlive(props.cell, props.x, props.y)
		console.log(props.cell)
		setAlive(!alive)
	}
    return (
		<div
			className={
				alive ? "cell alive" : "cell dead"
			}
			onClick={toggleAlive}
		></div>
    )
}
const mapStateToProps = state => {
    return {
        currentGrid: state.currentGrid
    }
}

export default connect(mapStateToProps)(Cell)