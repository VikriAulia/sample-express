let originalArray = [1,2,3,4,5,6,7,8,9];
let cloneArray = [...originalArray];

cloneArray[0] = "one";
cloneArray[1] = "two";
cloneArray[2] = "three";

console.log (`original array: ${originalArray}, clonenArray: ${cloneArray}`);