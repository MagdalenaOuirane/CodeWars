//8kyu Palindrome Strings

//A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

//Implement a function that checks if something is a palindrome.


// Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false

const clean = (line) => line.toString().replace(/[\W_]/g,'');



function isPalindrome(line) {

    const cleanLine = clean(line);
const reversedLine = cleanLine.split('').reverse().join('');

if ( typeof line === 'string') {
return  reversedLine === cleanLine;
} else if ( typeof line === 'number') {
return reversedLine === cleanLine;
}
}