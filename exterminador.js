// Crear un programa que permita ingresar una lista de animales separados por espacios y devuelva un mensaje con todos los animales menos los mosquitos y alacranes. Ejemplo:

// Ingrese animales: 🐱 🐭 🐶 🦟 🦊 🦂

// Animales sin insectos: [🐱, 🐭, 🐶, 🦊]

const animales = prompt("Ingrese animales, incluidos mosquitos y alacranes, separados por espacios");
const animalesArray = animales.split(' ');
let sinInsectosArray = [];

for(i=0; i<animalesArray.length; i++){
    if(animalesArray[i]!=="mosquito"&&animalesArray[i]!=="alacran"){
        sinInsectosArray.push(animalesArray[i]);
    }
}
alert(`Animales sin insectos = ${sinInsectosArray}`);