//Puntajes

// Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los puntajes de cada ronda de un juego separados por espacio. Primero debe preguntarse el nombre de la jugadora 1, luego sus puntajes, luego el nombre de la jugadora 2, luego sus puntajes. El programa debe comparar los valores de las listas uno a uno (el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que tenga mayor puntaje en la ronda. Al finalizar, mostrar quién gano y los puntajes finales. Ejemplo:

// Ingrese nombre jugadora 1: Ada
// Ingrese puntajes de Ada: 5 6 3 1 8

// Ingrese nombre jugadora 2: Grace
// Ingrese puntajes de Grace: 8 2 4 2 3

// Resultado: 2 (Ada) vs 3 (Grace)
// Ganadora: Grace

const nombre1 = prompt("Ingrese el nombre de la primer jugadora");
const puntajesJugadora1= prompt(`Ingrese los puntajes, separados por espacios de ${nombre1} `);
const puntajes1Array = puntajesJugadora1.split(' ');

const nombre2 = prompt("Ingrese el nombre de la primer jugadora");
const puntajesJugadora2= prompt(`Ingrese los puntajes, separados por espacios de ${nombre2} `);
const puntajes2Array = puntajesJugadora2.split(' ');

let totalJugadora1 = 0;
let totalJugadora2 = 0;

for(i=0; i<puntajes1Array.length; i++){
    if(Number(puntajes1Array[i])>Number(puntajes2Array[i])){
        totalJugadora1++;
    } else if(Number(puntajes1Array[i])<Number(puntajes2Array[i])){
        totalJugadora2++;
    } else{

    }
}

if(totalJugadora1>totalJugadora2){
    alert(`Ganadora ${nombre1} con un total de ${totalJugadora1} puntos contra ${totalJugadora2} puntos que hizo ${nombre2}`);
} else if(totalJugadora1<totalJugadora2){
    alert(`Ganadora ${nombre2} con un total de ${totalJugadora2} puntos contra ${totalJugadora1} puntos que hizo ${nombre1}`);
} else{
    alert("Empate");
}