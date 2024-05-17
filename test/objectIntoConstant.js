let object = { fruit: "Apple", color: "green" };
let { fruit, color } = { ...object };

console.log(`fruit: ${fruit}, color: ${color}`);

color = "red";
console.log(`object.color: ${object.color}, color: ${color}`);

/* Javascript treat array as reference to its value, ketika kita memindahkan array atau objek
ke variable baru atau const menggunakan =, ini cuma copy reference ke alamat memory aslinya
tidak membuat clone dari data, sehingga mengubah variable yang menggunakan = akan mengubah data aslinya

oleh karena itu gunakan ... ( spread operator ) agar java membuat memori baru dan clone data ke 
variabel baru*/