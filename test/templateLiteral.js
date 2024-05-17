function tag(literal, ...values){
    console.log("literal", literal)
    console.log("values", values);

    let result;
    switch (literal[1]) {
        case " plus ":
            result = values[0]+values[1];
            break;

        case " minus ":
            result = values[0]-values[1];
            break;
    
        default:
            console.log(`no literal accepted`)
            break;
    }
    return `${values[0]}${literal[1]}${values[1]} is ${result}`
}

let a = 1;
let b = 2;

let output = tag`What is ${a} plus ${b}?`;

console.log(output);

/* Menjelaskan konsep template literal string dalam javascript, 
dimana fungsi ini tag(literal, ...values)
literal akan menyimpan string dalam bentuk array, dan values akan menyimpan ${} dalam array juga
menjadi dimulai dari index 0, kedua array ini kemudian diapat digunakan dengan memanggil function
dengan hasil tag`literal[0] $values[0] literal[1] $values[1]'
*/