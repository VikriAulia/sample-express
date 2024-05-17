const primitiveDataType = 1; 
// const only store reference to the value, 
// so it cant be used to modify primitive value
try {
  primitiveDataType = 2;
} catch (e) {
  console.log(e); // will throw error
}

const nonPrimitiveDataType = []; 
// but we can use to access array and function
// as array and function is reference to the object
nonPrimitiveDataType.push(2024);

console.log(nonPrimitiveDataType)