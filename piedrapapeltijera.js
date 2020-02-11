//Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los valores de la jugada en una ronda de "piedra, papel o tijera". Primero debe preguntarse el nombre de la jugadora 1, luego sus jugadas, luego el nombre de la jugadora 2, luego sus jugadas. El programa debe comparar los valores de las listas uno a uno (el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que gane la ronda. Al finalizar, mostrar quién gano y los puntajes finales. Ejemplo:

// Ingrese nombre jugadora 1: Ada
// Ingrese jugadas de Ada: piedra papel papel piedra tijera

// Ingrese nombre jugadora 2: Grace
// Ingrese puntajes de Grace: papel piedra tijera tijera papel

// Resultado: 3 (Ada) vs 2 (Grace)
// Ganadora: Ada

const nombre1 = prompt("Ingrese el nombre de la primer jugadora");
const jugadas1 = prompt("Ingrese las jugadas separadas por un espacio");
const jugadas1Array = jugadas1.split(' ');
const nombre2 = prompt("Ingrese el nombre de la segunda jugadora");
const jugadas2 = prompt("Ingrese las jugadas separadas por un espacio");
const jugadas2Array = jugadas2.split(' ');
let totalJugadora1= 0;
let totalJugadora2 =0;

for(i=0; i<jugadas1Array.length; i++){
    if(jugadas1Array[i]==="piedra"&&jugadas2Array[i]==="papel"){
        totalJugadora2++;
    } else if(jugadas1Array[i]==="piedra"&&jugadas2Array[i]==="tijera"){
        totalJugadora1++;
    }else if(jugadas1Array[i]==="papel"&&jugadas2Array[i]==="piedra"){
        totalJugadora1++;
    } else if(jugadas1Array[i]==="papel"&&jugadas2Array[i]==="tijera"){
        totalJugadora2++;
    } else if(jugadas1Array[i]==="tijera"&&jugadas2Array[i]==="papel"){
        totalJugadora1++;
    }else if(jugadas1Array[i]==="tijera"&&jugadas2Array[i]==="piedra"){
        totalJugadora2++;
    }
}

if(totalJugadora1>totalJugadora2){
    alert(`Gano ${nombre1} con ${totalJugadora1} puntos vs ${totalJugadora2} puntos que hizo ${nombre2}`);
}else if(totalJugadora1<totalJugadora2){
    alert(`Gano ${nombre2} con ${totalJugadora2} puntos vs ${totalJugadora1} puntos que hizo ${nombre1}`);
} else{
    alert("EMPATE!");
}