"use strict";
let string = "1";
let number = 1;
let result;
const calculate = (a, b) => {
    if (Number.isInteger(a) == false || Number.isInteger(b) == false) {
        throw new Error("Invalid type: a parameter is not an interger");
    }
    else {
        return a + b;
    }
};
result = calculate(number, number);
console.log("value: ", result, "type of ", typeof result);
result = calculate(number, string);
console.log("value: ", result, "type of ", typeof result);
/* Result run:

value:  2 type of  number
value:  11  type of  string

*/
