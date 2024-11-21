// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str) {
    return str.slice(1, str.length -1);
}

console.log(removeChar("Karolina"))


// Step 2: Access the middle of the string
// We can access parts of a string using the slice() method. Here’s how it works:

// str.slice(start, end):
// start is the index where the slicing starts (inclusive).
// end is the index where the slicing ends (exclusive).
// For example:

// javascript
// Copy code
// let word = "hello";
// console.log(word.slice(1, 4)); // Output: "ell"

let word = "hello" ;
console.log(word.slice(1,4));

