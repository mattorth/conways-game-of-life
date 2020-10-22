function CountNeighbors(grid, x, y) {
    count = 0;

    // count neighbors that are alive
    // count all neighbors for cells not on border      X
    // count neighbors for cell on top border           X
    // count neighbors for cell on left border          X
    // count neighbors for cell on right border         X
    // count neighbors for cell on bottom border        X
    // count neighbors for cell in each corner
    // cells off grid are dead
        // don't count x<0, x>24 y<0, y>24
        // x === 0 don't count top left, top, top right
        // x === grid.length - 1 don't count bottom left, bottom, bottom right
        // y === 0 don't count top left, left, bottom left
        // y === grid.length -1 don't count top right, right, bottom right
    // up, down, left, right, top left, top right, bottom left, bottom right

    // Count all neighbors not on border
    if ((x > 0 && y > 0) && (x < grid.length -1 && y < grid.length - 1)) {
        count += grid[x-1][y-1];            // Top Left
        count += grid[x-1][y];              // Top
        count += grid[x-1][y+1];            // Top Right
        count += grid[x][y-1];              // Left
        count += grid[x][y+1];              // Right
        count += grid[x+1][y-1];            // Bottom Left
        count += grid[x+1][y];              // Bottom
        count += grid[x+1][y+1];            // Bottom Right
    } else if (x === 0 && (y > 0 && y < grid.length - 1)) {         // Top Border
        count += grid[x][y-1];              // Left
        count += grid[x][y+1];              // Right
        count += grid[x+1][y-1];            // Bottom Left
        count += grid[x+1][y];              // Bottom
        count += grid[x+1][y+1];            // Bottom Right
    } else if (x > 0 && x < grid.length - 1 && (y === 0)) {         // Left Border
        count += grid[x-1][y];              // Top
        count += grid[x-1][y+1];            // Top Right
        count += grid[x][y+1];              // Right
        count += grid[x+1][y];              // Bottom
        count += grid[x+1][y+1];            // Bottom Right
    } else if (x > 0 && x < grid.length - 1 && (y === grid.length - 1)) {         // Right Border
        count += grid[x-1][y-1];            // Top Left
        count += grid[x-1][y];              // Top
        count += grid[x][y-1];              // Left
        count += grid[x+1][y-1];            // Bottom Left
        count += grid[x+1][y];              // Bottom
    } else if (x === grid.length - 1 && (y > 0 && y < grid.length - 1)) {         // Bottom Border
        count += grid[x-1][y-1];            // Top Left
        count += grid[x-1][y];              // Top
        count += grid[x-1][y+1];            // Top Right
        count += grid[x][y-1];              // Left
        count += grid[x][y+1];              // Right
    } else if (x === 0 && (y === 0)) {                                       // Top Left
        count += grid[x][y+1];              // Right
        count += grid[x+1][y];              // Bottom
        count += grid[x+1][y+1];            // Bottom Right
    } else if (x === 0 && (y === grid.length - 1)) {                 // Top Right
        count += grid[x][y-1];              // Left
        count += grid[x+1][y-1];            // Bottom Left
        count += grid[x+1][y];              // Bottom
    } else if ((x === grid.length - 1) && (y === 0)) {         // Bottom Left
        count += grid[x-1][y];              // Top
        count += grid[x-1][y+1];            // Top Right
        count += grid[x][y+1];              // Right
    } else if ((x === grid.length - 1) && (y === grid.length - 1)) {         // Bottom Right
        count += grid[x-1][y-1];            // Top Left
        count += grid[x-1][y];              // Top
        count += grid[x][y-1];              // Left
    }
    return count
}