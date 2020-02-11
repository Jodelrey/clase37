//Arrays iguales

// Crear un programa que permita ingresar dos listas de valores separados por espacio y muestre en un mensaje si las listas son iguales o no (mismos valores en mismo orden). Ejemplo:

// Ingrese valores de lista 1: 10 25 6 33 48 105
// Ingrese valores de lista 2: 10 24 6 33 48 105

// Las listas no son iguales

const lista1 = prompt("Ingrese valores separados por un espacio");
const lista1Array = lista1.split(' ');

const lista2 = prompt("Ingrese valores separados por un espacio");
const lista2Array = lista2.split(' ');
let esIgual=true;

for(i=0; i<lista1Array.length; i++){
    if(Number(lista1Array[i])!==Number(lista2Array[i])){
        esIgual = false;

    }
}

if(esIgual){
    alert(`${lista1Array} es igual a ${lista2Array}`);
} else{
    alert("Las listas no son iguales");
}