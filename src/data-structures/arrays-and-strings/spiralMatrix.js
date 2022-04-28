import Assert from "node:assert";

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {    
    // result
    let result = [];
    const expectedCount = matrix.length * matrix[0].length;
    
    // matrix bounds
    let topBound = -1;
    let rightBound = matrix[0].length;
    let bottomBound = matrix.length;
    let leftBound = -1;
    
    // position
    let row = 0;
    let col = 0;
    let direction = "RIGHT"; // RIGHT, LEFT, UP, DOWN
    
    // change directions
    // RIGHT = col+1
    const goRight = () => { col += 1; }
    // DOWN = row+1
    const goDown = () => { row += 1; }
    // LEFT = col-1
    const goLeft = () => { col -= 1; }
    // UP = row-1
    const goUp = () => { row -= 1; }
    
    
    while(result.length <= expectedCount) {
        // push current value in position into result
        result.push(matrix[row][col]);
        
        // check to see if we need to change direction
        if(direction === "RIGHT" && col+1 === rightBound) {
            direction = "DOWN";
            // update topBound
            topBound++;
        }
        else if(direction === "DOWN" && row+1 === bottomBound) {
            direction = "LEFT";
            rightBound--;
        }
        else if(direction === "LEFT" && col-1 === leftBound) {
            direction = "UP";
            bottomBound--;
        }
        else if(direction === "UP" && row-1 === topBound) {
            direction = "RIGHT";
            leftBound++;
        }
        
        // go into next spot
        switch(direction) {
            case "RIGHT":
                goRight();
                break;
            case "DOWN":
                goDown();
                break;
            case "LEFT":
                goLeft();
                break;
            case "UP":
                goUp();
                break;
            default:
                console.err("Invalid direction");
                break;
        }
        
        
    }
    
    return result;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder2 = function(matrix) {
    const RIGHT = "right";
    const LEFT = "left";
    const DOWN = "down";
    const UP = "up";
    
    // result.length == matrix.length * matrix[0].length;
    let result = [];
    const EXPECTED_COUNT = matrix.length * matrix[0].length;
    
    let BOUND_TOP = -1;
    let BOUND_LEFT = -1;
    let BOUND_RIGHT = matrix[0].length;
    let BOUND_BOTTOM = matrix.length
    
    let direction = RIGHT;
    let row = 0, col = 0;   // current pointer location
    
    const move = () => {
        // check for direction change
        if(direction === RIGHT && col === BOUND_RIGHT-1) {
            direction = DOWN;
            BOUND_TOP++;
        }
        else if(direction === DOWN && row === BOUND_BOTTOM-1) {
            direction = LEFT;
            BOUND_RIGHT--;
        }
        else if(direction === LEFT && col === BOUND_LEFT+1) {
            direction = UP;
            BOUND_BOTTOM--;
        }
        else if(direction === UP && row === BOUND_TOP+1) {
            direction = RIGHT;
            BOUND_LEFT++;
        }
        
        // update row or col
        switch(direction) {
            case RIGHT:
                col++;
                break;
            case DOWN:
                row++;
                break;
            case LEFT:
                col--;
                break;
            case UP:
                row--;
                break;
            default:
                console.error(`invalid direction: ${direction}`);
                break;
        }
        
    }
    
    // traverse in sprial order
    while(result.length < EXPECTED_COUNT) {
        
        // add the current value
        result.push(matrix[row][col]);
        
        // go to next value
        move();
    }
        
    return result;
};

let matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
let result = spiralOrder(matrix);
console.log(result);
