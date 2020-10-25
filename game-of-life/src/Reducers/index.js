import { TOGGLE_ALIVE, NEXT_GEN, TOGGLE_TRUE, TOGGLE_FALSE, CLEAR_GRID } from '../Actions/index';

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
        case TOGGLE_TRUE:
            return {
                ...state,
                nextGrid: state.currentGrid.map(row =>
                    row.map(cell => (
                        (cell.id === action.payload.id)
                        ? {...cell, isAlive: true}
                        : cell
                        )
                    )
                )
            }
        case TOGGLE_FALSE:
            return {
                ...state,
                nextGrid: state.currentGrid.map(row =>
                    row.map(cell => (
                        (cell.id === action.payload.id)
                        ? {...cell, isAlive: false}
                        : cell
                        )
                    )
                )
            }
        case NEXT_GEN:
            return {
                ...state,
                currentGrid: action.payload
            }
        case CLEAR_GRID:
            return {
                ...state,
                currentGrid: action.payload
            }

        default:
            return state;
    }
}

export default reducer;