// Decraling a Variable ( Overtype ~ Not Recommended)
let weather: string = "sunny";
let weather2 = "sunny"; // use this anotantion instead

// Declaring a Return Value
const weather3 = "sunny";
function getWeather(weather: string): string {
  return weather;
}
getWeather(weather3);

// Declaring UNION Type
let stringOrNumberType: string | number | undefined;
stringOrNumberType = "bar";
stringOrNumberType = 100;
stringOrNumberType = undefined;
stringOrNumberType = true;

//Declaring tuple type
let validTuple: [string, number] = ["bar", 100];
let invalidTuple: [string, number] = [1, "bar"];
