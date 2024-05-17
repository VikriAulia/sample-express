let numbers = [ 0, 1, 13, 22, 213, -2,-992];

let traditional = numbers.filter(function(num){
    return num >=0;
});

let arrow = numbers.filter(num => num >= 0);

console.log(traditional);
console.log(arrow);