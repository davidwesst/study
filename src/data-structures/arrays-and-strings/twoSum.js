/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let i, j;
    
    for(i = 0; i<nums.length; i++) {
        for(j = nums.length-1; j > i; j--) {
            if(nums[i] + nums[j] === target) {
                // found
                break;
            }
        }
        
        if(nums[i] + nums[j] === target) {
            // found
            break;
        }
    }
    
    return [i, j];
};

console.log(twoSum([3,2,4], 6));