// UZDUOTIS- Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.



// 1.We want to create a function that takes a boolean value (true or false) and returns "Yes" if the value is true, or "No" if the value is false.

//First, let's define a function. A function is a reusable block of code that can take inputs and give outputs. Here's how we start:

function boolToWord(bool) {
    // We'll add the logic here in the next steps
  }

  //The bool is the input parameter, representing the boolean value we will work with.

  //To decide what to return, we need to check the value of bool. If it is true, we return "Yes", and if it's false, we return "No".

//We can use an if statement for this:


// function boolToWord(bool) {
// if (bool === true) {
//     return "Yes";
// } else {
//     return "No";
// }
// }

// Now let's test it by calling the function with different values:

// console.log(boolToWord(true));
// console.log(boolToWord(false));

// What is a Boolean?
// A Boolean is a data type in programming that can only have two values:

// true
// false
// It's like answering a yes-or-no question in code:

// Is the light on? true
// Is it raining? false
// We use Booleans to represent simple true/false logic. They are often used in decision-making, such as determining which code should run under certain conditions.

// Why do we need functions?
// A function is a reusable block of code. Here’s why they’re helpful:

// Avoid Repetition: Instead of writing the same code multiple times, you can write a function and call it whenever you need it.
// Make Code Organized: Functions keep your code tidy and easier to read.
// Reusable Logic: Once you write a function, you can use it with different inputs to get different outputs.
// For example:

// Imagine you need to check if a light is on (true) or off (false) and return "Yes" or "No". Instead of writing the logic over and over again, you can write a function that does it once.




// Is boolToWord irreplaceable?
// You’re correct that this function is designed to work with true and false. But JavaScript allows us to call it with anything unless we explicitly enforce rules.

// To make sure the function works only with true and false, we can add a type check. Here’s an example:

// javascript
// Copy code
// function boolToWord(bool) {
//   if (typeof bool !== "boolean") {
//     return "Error: Input must be true or false.";
//   }
  
//   return bool ? "Yes" : "No";
// }
// What’s happening here?
// typeof bool checks the type of the input.
// If it’s not "boolean", the function returns an error message.

function boolToWord (bool) {
    return bool? "Yes" : "No";
}

console.log(boolToWord(true));
console.log(boolToWord(false));
console.log(boolToWord(1));
console.log(boolToWord(""));

// /*Breaking It Down
// bool ? "Yes" : "No"

// This is the ternary operator:
// If bool is true, it returns "Yes".
// If bool is false, it returns "No".
// It’s just like saying:
// javascript
// Copy code)
// if (bool) {
//   return "Yes";
// } else {
//   return "No";
// }
// return bool ? "Yes" : "No";

// The return keyword immediately gives the result back to wherever the function was called, so we don’t need curly braces or multiple lines.
