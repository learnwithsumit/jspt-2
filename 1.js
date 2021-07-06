// 1. Swaping values
let array = [1, 2, 3, 4, 5];

// temp variable
// let temp = array[0];
// array[0] = array[4];
// array[4] = temp;

// console.log(array);

// array destructuring
// [array[0], array[4]] = [array[4], array[0]];
// console.log(array);

let a = 1;
let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

// math
b = a + (a = b) - b;
console.log(a, b);
