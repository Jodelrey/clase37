//Perros y gatos

// Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro. Ejemplo:

const perrosYGatos = prompt("Ingrese perros y gatos, en el orden que desee, separados por espacios");
const perrosYGatosArray = perrosYGatos.split(' ');
let perrosArray=[];
let gatosArray=[];

for(let i=0; i<perrosYGatosArray.length; i++){
    if(perrosYGatosArray[i]==="perro"){
        perrosArray.push(perrosYGatosArray[i]);
    }else{
        gatosArray.push(perrosYGatosArray[i]);
    }
}

let arrayOrdenado = perrosArray.concat(gatosArray);
console.log(arrayOrdenado);