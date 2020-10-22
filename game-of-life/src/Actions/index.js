export const TOGGLE_ALIVE = 'TOGGLE_ALIVE';  // action type
export const NEXT_GEN = 'NEXT_GEN'

export function toggleAlive(cell, x, y) {
    console.log(cell.isAlive, x, y)
    return {
        type: TOGGLE_ALIVE,
        payload: cell, x, y
    }
}

export function nextGen(grid, x, y) {
    return {
        type: NEXT_GEN,
        payload: grid, x, y
    }
}