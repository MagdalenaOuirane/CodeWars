// 7kyu- Anagram


// An anagram is the result of rearranging the letters of a word to produce a new word.

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


function isAnagram(test, original) {
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }
    return sanitizeString(test) == sanitizeString(original);
}


