//Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el array inverso. Ejemplo:

// Ingrese números: 5 7 99 34 54 2 12

// El array invertido es: [12, 2, 54, 34, 99, 7, 5]

const valores = prompt("Ingrese numeros separados por espacios");
const arrayOriginal = valores.split(' ');
let revertirArray = [];

for(let i = arrayOriginal.length-1; i>=0; i--){
    revertirArray.push(arrayOriginal[i]);

}
alert(revertirArray);

//OR

// const valores = prompt("Ingrese numeros separados por espacios");
// const arrayOriginal = valores.split(' ');
// const revertirArray = arrayOriginal.reverse();
// alert(revertirArray);