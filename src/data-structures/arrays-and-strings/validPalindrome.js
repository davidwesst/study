/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let retval;
    
    // normalize the input
    let normalizer = /[\s\W_]/gi;
    let normalizedInput = s.toLowerCase().replaceAll(normalizer,'');
    
    // palindrome check
    let i = 0;
    let j = normalizedInput.length - 1;
    while(retval === undefined) {
        if(i >= j) {
            retval = true;
        }
        else if(normalizedInput.charAt(i) !== normalizedInput.charAt(j)) {
            retval = false;
        }
        
        // manage counter
        i++;
        j--;
    }
    
    return retval;
};  