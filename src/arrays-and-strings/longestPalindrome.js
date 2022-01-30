import Assert from "node:assert";

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let bestFound = "";

     function palidromeCheck(str) {
         let i=0, j=str.length-1;
         let isPalindrome = true;
         while(i < j && isPalindrome) {
            if(str.charAt(i) !== str.charAt(j)) {
                isPalindrome = false;
            }

            i++;
            j--;
         }

         return isPalindrome;
     }

     // check all substrings, front to back
     for(let front=0; front < s.length; front++) {
         let curr = s.substring(front);
         if(palidromeCheck(curr) && curr.length > bestFound.length) {
             bestFound = curr;
         }
     }

    // check all substrings, back to front
    for(let end=s.length; end > 0; end--) {
        let curr = s.substring(0, end);
        if(palidromeCheck(curr) && curr.length > bestFound.length) {
            bestFound = curr;
        }
    }

    // check all substrings, middle
    let start = 0;
    let end = s.length;
    while(start < end) {
        let curr = s.substring(start, end);
        if(palidromeCheck(curr) && curr.length > bestFound.length) {
            bestFound = curr;
        }

        start++;
        end--;
    }



     return bestFound;
};

Assert.equal(longestPalindrome("babad"), "bab", "Expected: bab");
Assert.equal(longestPalindrome("cbbd"), "bb", "Expected: bb");
Assert.equal(longestPalindrome("racecar"), "racecar", "Expected: racecar");
Assert.equal(longestPalindrome("abba"), "abba", "Expected: abba");
