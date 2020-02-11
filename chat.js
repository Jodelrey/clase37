//Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat. Las reglas son:
// Para una usuaria, debe mostrar: nombre usuaria + está conectada
// Para dos usuarias, debe mostrar: nombre usuaria 1 + y + nombre usuaria 2 + están conectadas
// Para más de dos usuarias, debe mostrar: nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas

let nombres = prompt("Ingrese usuarios para un chat separados por espacios");
let nombresArray = nombres.split(' ');
let ultimo;

if(nombresArray.length===1){
    alert(`${nombresArray[i]} esta conectada`);
}else if(nombresArray.length === 2){
        ultimo = nombresArray.pop();
        console.log(`${nombresArray} y ${ultimo} estan conectadas`); 
} else if(nombresArray.length > 2){
    alert(`${nombresArray[0]}, ${nombresArray[1]} y ${(nombresArray.length-2)} personas mas estan conectadas`);
}
        
