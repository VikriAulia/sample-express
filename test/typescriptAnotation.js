"use strict";
// Decraling a Variable ( Overtype ~ Not Recommended)
let weather = "sunny";
let weather2 = "sunny"; // use this anotantion instead
// Declaring a Return Value
const weather3 = "sunny";
function getWeather(weather) {
    return weather;
}
getWeather(weather3);
// Declaring UNION Type
let stringOrNumberType;
stringOrNumberType = "bar";
stringOrNumberType = 100;
stringOrNumberType = undefined;
stringOrNumberType = true;
//Declaring tuple type
let validTuple = ["bar", 100];
let invalidTuple = [1, "bar"];
