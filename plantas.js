// Crear un programa que permita ingresar una lista de plantas con una oruga y una calavera (veneno) entre ellas. La oruga se come todas las plantas que hay a su derecha, hasta que se encuentra con el veneno. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda de la oruga y a la derecha del veneno. Ejemplo:

// Ingrese plantas y oruga: 🌱🌻🌱🐛🌱🌸🌱🌱💀🌷
// Plantas sobrevivientes: 🌱🌻🌱🌷

const listaPlantasOrugasCalaveras = prompt("Ingrese un listado con plantas, una oruga y una calabera separados por espacios, la calavera debe encontrarse a la derecha de la oruga, separadas por plantas");

const plantasArray = listaPlantasOrugasCalaveras.split(' ');
let indiceOruga= plantasArray.indexOf("oruga");
let indiceCalavera = plantasArray.indexOf("calavera");
plantasArray.splice((indiceOruga+1), (indiceCalavera-indiceOruga));

alert(plantasArray);