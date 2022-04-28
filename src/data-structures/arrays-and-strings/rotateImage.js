/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    for(let j=0; j< Math.floor(matrix.length / 2); j++) {
        const END = matrix.length - 1 - j;
        // initialize first location for pointer
        let rowTop=j, colTop=j;
        let rowRight=j, colRight=END;
        let rowBottom=END, colBottom=END;
        let rowLeft=END, colLeft=j;
        
        for(let i=j; i<matrix[0].length - j; i++) {
            let temp;

            // b -> temp
            temp = matrix[rowRight][colRight];
            // a -> b
            matrix[rowRight][colRight] = matrix[rowTop][colTop];
            // d -> a
            matrix[rowTop][colTop] = matrix[rowLeft][colLeft];
            // c -> d
            matrix[rowLeft][colLeft] = matrix[rowBottom][colBottom];
            // temp = c
            matrix[rowBottom][colBottom] = temp;

            // set next locations
            colTop += 1; // moves right
            rowRight += 1; // moves down
            colBottom -= 1; // moves left
            rowLeft -= 1; // moves up
        }
    }
};

let input = [[1,2],[3,4]];
let result = rotate(input);
console.log(result);
