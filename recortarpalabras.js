//Crear un programa que permita ingresar una lista de palabras separadas por espacios y que pregunta a cuántos caracteres se desea recortar las palabras. El programa debe devolver una lista con las palabras recortadas en esa cantidad de caracteres. Ejemplo:

// Ingrese palabras: elefante sociedad chocolate avion america
// Ingrese cantidad de caracteres permitidos: 4

// Las palabras recortadas son: elef soci choc avion amer

const lista = prompt("Ingrese una lista de palabras, separadas por un espacio");
const listaArray = lista.split(' ');
const recorte = Number(prompt("Ingrese la cantidad de letras que desea recortar de las palabras"));

let nuevaLista = [];
 
for(i=0; i<listaArray.length; i++){
    nuevaLista.push(listaArray[i].slice(0, -recorte));
}

alert(nuevaLista);