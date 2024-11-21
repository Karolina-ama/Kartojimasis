// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// parasyti 2 funkcijas
// pirma funkcija -grazina didziausia reiksme
// antra funkcija - grazina maziausia reiksme

function max (params) {
    return(Math.max(...params));
}


console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // Expected: 566
console.log(max([-52, 56, 30, 29, -54, 0, -110])); // Expected: 56
console.log(max([5])); // Expected: 5

function min(params) {
    return(Math.min(...params));
}

console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(min([-52, 56, 30, 29, -54, 0, -110])); 
console.log(min([5]));
    
// }
// js turi built in Math.max and Math.min kurios  grazina didziausia ir maziausia



// sujungti abi funkcijas i viena 

function findMaxMin(params) {
    const max = Math.max(...params);
    const min = Math.min(...params);

    return [max, min];
    
}

console.log(findMaxMin([-5, 10, 20, 25, -95]));
console.log(findMaxMin([4, 6, 2, 1, 9, 63, -134, 566])); // Expected: [566, -134]
console.log(findMaxMin([-52, 56, 30, 29, -54, 0, -110])); // Expected: [56, -110]
console.log(findMaxMin([5])); // Expected: [5, 5]