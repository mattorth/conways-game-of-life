import { TOGGLE_ALIVE } from '../Actions/index';
import data from '../data';

let grid = [];

const size = {
    one: 25,
    two: 50,
    three: 100
};

let i = 0;

for(let x =0; x < size.one; x++) {
    grid[x] = [];
    for(let y=0; y < size.one; y++) {
        grid[x][y] = {
            id: i++,
            isAlive: false,
        }
    }
}

const initialState = {
    currentGrid: grid,
    previousGrid: grid,
    generation: 0
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_ALIVE:
            return {
                ...state,
                currentGrid: state.currentGrid.map(row =>
                    row.map(cell => (
                        (cell.id === action.payload.id)
                        ? {...cell, isAlive: !action.payload.isAlive}
                        : cell
                        )
                    )
                )
            }
        // case NEXT_GEN:
        //     return {

        //     }

        default:
            return state;
    }
}

export default reducer;