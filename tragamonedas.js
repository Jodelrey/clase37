//Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales. Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:

// Ingrese símbolos: ⭐️⭐️⭐️💫✨
// ¡Has perdido! Inténtalo nuevamente

// Ingrese símbolos: 💫💫💫💫💫
// ¡Felicitaciones! Has ganado

const conjunto = prompt("Ingrese un conjunto de no menos de 5 simbolos, separados por espacios");

const conjuntoArray = conjunto.split(' ');
let sonIguales = true;

for(let i=1; i<5; i++){
    if(conjuntoArray[i]!==conjuntoArray[i-1]){
        sonIguales = false;
    }
}
if(sonIguales){
    alert("¡Felicitaciones! Has ganado");
} else{
    alert("¡Has perdido! Inténtalo nuevamente");
}