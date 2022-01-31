/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseWords = function(s) {
    s = s.reverse();
    
    // initialize get word
    let wordStart = 0;
    let wordEnd = s.indexOf(" ", wordStart) - 1;
    
    while(wordStart < s.length) {
        // put word back in order
        let i=wordStart, j=wordEnd;
        while(i < j) {
            const swap = s[i];
            s[i] = s[j];
            s[j] = swap;
            
            i++;
            j--;
        }

        // get next word
        wordStart = wordEnd + 2;
        wordEnd = s.indexOf(" ", wordStart) - 1;
        if(wordEnd < 0) {
            wordEnd = s.length - 1;
        }
    }
};