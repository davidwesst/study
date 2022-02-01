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

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseWords2 = function(s) {
    // reverse everything
    s.reverse();
    
    // traverse and unreverse individual words
    const unreverse = (start, end) => {
        let i=start, j=end;
        while(i < j) {
            let swap = s[i];
            s[i] = s[j];
            s[j] = swap;

            i++;
            j--;
        }
    };
    
    
    let startIndex = 0;
    for(let i=0; i<=s.length; i++) {
        if(s[i] === ' ' || i === s.length) {
            unreverse(startIndex, i-1);
            startIndex = i+1;   // set next start of word
        }
    }
};
let test1 = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"];
console.log(reverseWords2(test1));

let test2 = ["i"," ","l","o","v","e"," ","c","a","t","s"];
console.log(reverseWords2(test2));

