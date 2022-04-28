/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let isNeg = false;
    let i;
    
    // trim the leading whitespace
    s = s.trimStart();
    
    // parse the sign if exists
    
    if(s[0] === '-' || s[0] === '+') {
        i = 1;
        
        if(s[0] === '-') {
            isNeg = true;
        }
    }
    else {
        i = 0;
    }
    
    // check and parse digits and handle the leading zeroes
    let parsedNums = [];
    for(i=i; i<s.length; i++) {
        if(/\d/g.test(s[i])) {
            parsedNums.push(s[i]);
        }
        else {
            break;  // no more digits
        }
    }
    
    // convert into a number
    let parsedValue = 0;
    if(parsedNums.length > 0) {
        parsedValue = Number.parseInt(parsedNums.join(''));
        if(isNeg === true) {
            parsedValue = -parsedValue;
        }
    }
    
    // clamp
    const MIN = -(2**31);
    const MAX = 2**31 - 1;
    if(parsedValue < MIN) {
        parsedValue = MIN;
    }
    else if(parsedValue > MAX) {
        parsedValue = MAX;
    }
    
    return parsedValue
    
};

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi2 = function(s) {
    const MIN = -(2**31);
    const MAX = 2**31-1;
    
    // remove leading whitespace and setup character array
    s = s.trimStart();
    
    // handle sign
    let startIndex = 0;
    let isNegative = false;
    if(s.charAt(0) === '+' || s.charAt(0) === '-') {
        startIndex = 1;
        
        if(s.charAt(0) === '-') {
            isNegative = true;
        }
    }
    
    // pull out numbers
    let validCharacter = new RegExp(/[0-9]/, "i");
    let parsedNumbers = [];
    for(let i=startIndex; i<s.length; i++) {
        let current = s[i];
        if(validCharacter.test(current) === true) {
            if(!isNaN(current)) {
                parsedNumbers.push(s.charAt(i));
            }
        }
        else {
            break;
        }
    }
    
    // make a number and apply sign
    let parsedValue = 0;
    if(parsedNumbers.length > 0) {
        parsedValue = Number.parseInt(parsedNumbers.join(''));
    }
    if(isNegative) {
        parsedValue = -parsedValue;
    }
    
    // clamp it
    if(parsedValue <= MIN) {
        parsedValue = MIN;
    }
    else if(parsedValue >= MAX) {
        parsedValue = MAX;
    }
    
    return parsedValue;
};

console.log(myAtoi2("42"));
console.log(myAtoi2("words and 987"));
console.log(myAtoi2("   +   412"));