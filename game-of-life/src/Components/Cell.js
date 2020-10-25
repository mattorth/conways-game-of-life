import React from 'react';
import { connect } from 'react-redux';

function Cell(props) {

	const toggleAlive = e => {
		props.toggleAlive(props.cell, props.x, props.y)
	}
    return (
		<div
			className={
				props.cell.isAlive ? "cell alive" : "cell dead"
			}
			onClick={!props.isRunning ? toggleAlive : null}
		></div>
    )
}
const mapStateToProps = state => {
    return {
        currentGrid: state.currentGrid
    }
}

export default connect(mapStateToProps)(Cell)