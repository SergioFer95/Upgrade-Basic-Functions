"use strict";

// Iteración #1 - Busca el máximo
// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
    
    if(numberOne > numberTwo){
        console.log("El número " + numberOne + " es el mayor.");

    } else if(numberTwo > numberOne){
        console.log("El número " + numberTwo + " es el mayor.");
    }
}
sum(18, 56);



// Iteración #2 - Buscar la palabra más larga
// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función: