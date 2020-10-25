function CountNeighbors(grid, x, y) {
    let count = 0;

    if ((x > 0 && y > 0) && (x < grid.length -1 && y < grid.length - 1)) {
        count += grid[x-1][y-1].isAlive;            // Top Left
        count += grid[x-1][y].isAlive;              // Top
        count += grid[x-1][y+1].isAlive;            // Top Right
        count += grid[x][y-1].isAlive;              // Left
        count += grid[x][y+1].isAlive;              // Right
        count += grid[x+1][y-1].isAlive;            // Bottom Left
        count += grid[x+1][y].isAlive;              // Bottom
        count += grid[x+1][y+1].isAlive;            // Bottom Right
    } else if (x === 0 && (y > 0 && y < grid.length - 1)) {         // Top Border
        count += grid[x][y-1].isAlive;              // Left
        count += grid[x][y+1].isAlive;              // Right
        count += grid[x+1][y-1].isAlive;            // Bottom Left
        count += grid[x+1][y].isAlive;              // Bottom
        count += grid[x+1][y+1].isAlive;            // Bottom Right
    } else if (x > 0 && x < grid.length - 1 && (y === 0)) {         // Left Border
        count += grid[x-1][y].isAlive;              // Top
        count += grid[x-1][y+1].isAlive;            // Top Right
        count += grid[x][y+1].isAlive;              // Right
        count += grid[x+1][y].isAlive;              // Bottom
        count += grid[x+1][y+1].isAlive;            // Bottom Right
    } else if ((x > 0 && x < grid.length - 1) && (y === grid.length - 1)) {         // Right Border
        count += grid[x-1][y-1].isAlive;            // Top Left
        count += grid[x-1][y].isAlive;              // Top
        count += grid[x][y-1].isAlive;              // Left
        count += grid[x+1][y-1].isAlive;            // Bottom Left
        count += grid[x+1][y].isAlive;              // Bottom
    } else if (x === grid.length - 1 && (y > 0 && y < grid.length - 1)) {         // Bottom Border
        count += grid[x-1][y-1].isAlive;            // Top Left
        count += grid[x-1][y].isAlive;              // Top
        count += grid[x-1][y+1].isAlive;            // Top Right
        count += grid[x][y-1].isAlive;              // Left
        count += grid[x][y+1].isAlive;              // Right
    } else if (x === 0 && (y === 0)) {                                       // Top Left
        count += grid[x][y+1].isAlive;              // Right
        count += grid[x+1][y].isAlive;              // Bottom
        count += grid[x+1][y+1].isAlive;            // Bottom Right
    } else if (x === 0 && (y === grid.length - 1)) {                 // Top Right
        count += grid[x][y-1].isAlive;              // Left
        count += grid[x+1][y-1].isAlive;            // Bottom Left
        count += grid[x+1][y].isAlive;              // Bottom
    } else if ((x === grid.length - 1) && (y === 0)) {         // Bottom Left
        count += grid[x-1][y].isAlive;              // Top
        count += grid[x-1][y+1].isAlive;            // Top Right
        count += grid[x][y+1].isAlive;              // Right
    } else if ((x === grid.length - 1) && (y === grid.length - 1)) {         // Bottom Right
        count += grid[x-1][y-1].isAlive;            // Top Left
        count += grid[x-1][y].isAlive;              // Top
        count += grid[x][y-1].isAlive;              // Left
    }
    return count
};

export default CountNeighbors;