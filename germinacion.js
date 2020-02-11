//Crear un programa que permita ingresar una lista de flores y plantines (🌱). La lista debe comenzar con una flor, si no lo hace debe mostrar un mensaje de error. El programa debe convertir los plantines en flores, tomando como referencia la primera flor que encuentre a su izquierda. Ejemplo:

// Ingrese flores y plantines: 🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱
// ¡Las flores han germinado!: 🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸

const listado = prompt("Ingrese listado de plantines y flores, separados por espacio");
const listadoArray = listado.split(' ');

if(listadoArray[0]==="plantin"){
    alert("El listado debe comenzar con una flor")

} else{
    for(let i = 1; i<listadoArray.length; i++){
        if(listadoArray[i] === "plantin"){
            listadoArray[i] = listadoArray[i-1];
        }
    }
    
console.log(listadoArray);
}

