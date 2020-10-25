export const TOGGLE_ALIVE = 'TOGGLE_ALIVE';  // action type
export const NEXT_GEN = 'NEXT_GEN';
export const TOGGLE_TRUE = 'TOGGLE_TRUE';  // action type
export const TOGGLE_FALSE = 'TOGGLE_FALSE';  // action type
export const CLEAR_GRID = 'CLEAR_GRID'

export function toggleAlive(cell, x, y) {
    console.log(cell.isAlive, x, y)
    return {
        type: TOGGLE_ALIVE,
        payload: cell, x, y
    }
}

export function toggleTrue(cell, x, y) {
    return {
        type: TOGGLE_TRUE,
        payload: cell, x, y
    }
}

export function toggleFalse(cell, x, y) {
    return {
        type: TOGGLE_FALSE,
        payload: cell, x, y
    }
}

export function nextGen(grid) {
    return {
        type: NEXT_GEN,
        payload: grid
    }
}

export function clearGrid(grid) {
    return {
        type: CLEAR_GRID,
        payload: grid
    }
}