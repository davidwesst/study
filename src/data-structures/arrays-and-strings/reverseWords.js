/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.trim();
    s=s.replace(/(\s+)/g, ' ');
    
    let words = [...s.match(/(\w+)/gi)];
    
    let i = 0, j = words.length-1;
    while(i < j) {
        let swap = words[i];
        words[i] = words[j];
        words[j] = swap;
        
        i++;
        j--;
    }
    
    return words.join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWordsAgain = function(s) {
    // fix whitespace
    s.trim();
    
    // get the words
    let words = s.match(/([A-Za-z0-9]+)/gi);
    
    return words.reverse().join(' ');
};