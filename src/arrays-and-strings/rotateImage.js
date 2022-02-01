/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    // directions    
    const RIGHT = "right";
    const DOWN = "down";
    const LEFT = "left";
    const UP = "up";
    
    // calculate initial bounds
    let MAX_RIGHTDOWN = matrix.length - 1;
    let MAX_LEFTUP = 0;
    
    // location and direction 
    let row, col, direction, previousOverwrite;

    function copyToNext(value) {
        let overwritten;

        switch(direction) {
            case RIGHT:
                overwritten = matrix[row][col+1];
                matrix[row][col+1] = value;
                break;
            case DOWN:
                overwritten = matrix[row+1][col];
                matrix[row+1][col] = value;
                break;
            case LEFT:
                overwritten = matrix[row][col-1];
                matrix[row][col-1] = value;
                break;
            case UP:
                overwritten = matrix[row-1][col];
                matrix[row-1][col] = value;
                break;
            default:
                console.error(`Invalid move direction ${direction}`);
                break;
        }

        return overwritten;
    }

    function move() {
        let destRow, destCol;

        switch(direction) {
            case RIGHT:
                destRow = row;
                destCol = col+1;
                break;
            case DOWN:
                destRow = row+1;
                destCol = col;
                break;
            case LEFT:
                destRow = row;
                destCol = col-1;
                break;
            case UP:
                destRow = row-1;
                destCol = col;
                break;
            default:
                console.error(`Invalid move direction ${direction}`);
                break;
        }

        // update pointer
        row = destRow;
        col = destCol;
    }
    
    /**
    *   @return {void} Updates direction when row or col hits a bound
    */
    function checkDirection(swapVal) {
        // check bound
        switch(direction) {
            case RIGHT:
                if(col === MAX_RIGHTDOWN) {
                    direction = DOWN;
                }
                break;
            case DOWN:
                if(row === MAX_RIGHTDOWN) {
                    direction = LEFT;
                }
                break;
            case LEFT:
                if(col === MAX_LEFTUP) {
                    direction = UP;
                }
                break;
            case UP:
                if(row === MAX_LEFTUP) {
                    matrix[row][col] = swapVal;
                    direction = RIGHT;
                }
                break;
            default:
                console.error(`Invalid direction ${direction}`);
                break;
        }
    }
    
    const totalSubMatrices = Math.floor(matrix.length / 2);
    for(let i=0; i<= totalSubMatrices; i++) {
        // set initial values
        row = i;
        col = i;
        direction = RIGHT;
        let lastValue;
        
        // set bounds
        MAX_LEFTUP = i;
        MAX_RIGHTDOWN = matrix.length - 1 - i;
        
        do {
            lastValue = copyToNext(matrix[i][i]);
            move();
            checkDirection();
        } while(row !== col);
    }    
};

let test1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(test1);
console.log(test1);