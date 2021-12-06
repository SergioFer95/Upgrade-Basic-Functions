"use strict";

// Iteración #1 - Busca el máximo
// Completa la función que tomando dos números como argumento devuelva el más alto.

var num1 = parseInt(prompt("Introduce un número", 0));
var num2 = parseInt(prompt("Introduce otro número", 0));
alert("Te vamos a decir cuál de los dos números es el mayor");

function sum(numberOne , numberTwo) {
    
    if(numberOne > numberTwo){
        console.log("Este es el resultado de la Iteración #1: El número " + numberOne + " es el mayor.");

    } else if(numberTwo > numberOne){
        console.log("Este es el resultado de la Iteración #1: El número " + numberTwo + " es el mayor.");
    }
}
sum(num1, num2);


// Iteración #2 - Buscar la palabra más larga
// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    var longestWord = param[0];

    for(var i = 0; i < param.length; i++){
        if(param[i].length > longestWord.length){
            longestWord = param[i];
        }
    }
    return (longestWord);
}

let solution = findLongestWord(avengers);
console.log("Este es el resultado de la Iteración #2: " + solution);


// Iteración #3: Calcular la suma
// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
const allNumbers = [1, 2, 3, 5, 45, 37, 58];

// OPCIÓN 1: Resuelta!!!!!!!!

// var suma = (num1, num2) => num1 + num2;
// console.log("Este es el resultado de la Iteración #3: " + allNumbers.reduce(suma));


// OPCIÓN 2:
var all = 0;

function other(param) {
    for(var i = 0; i < param.length; i++){
        all += param[i];
    }
    return all;
}

var final = other(allNumbers);
console.log("Este es el resultado de la Iteración #3: " + final);


// Iteración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const allNumbers2 = [12, 21, 38, 5, 45, 37, 6];
var suma5 = 0;

function average(param) {
    for(var i = 0; i < param.length; i++){
        suma5 += param[i];
        var division = suma5 / param.length;
    }
    return division;
}

var resultado = average(allNumbers2);
console.log("Este es el resultado de la Iteración #4: " + resultado);



// Iteración #5: Calcular promedio de strings
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// RESUELTA!!!
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let total = 0;
  for(var i = 0; i < param.length; i++){
      if(typeof param[i] === "number"){
          total += param[i];
        } else {
            total += param[i].length;
        }
    }
    return total;
}

var result = averageWord(mixedElements);
console.log("Este es el resultado de la Iteración #5: " + result);



// Iteración #6: Valores únicos
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados. En caso de que existan, los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];


// NO RESUELTO:
// function removeDuplicates(param) {
    
//     for(var i = 0; i < param.length; i++){
//         var sameWord = param[0];

//         for(var j of sameWord){
//             if(sameWord != param[j]){
//                 console.log("No hay alimentos duplicados");
    
//             }else if(sameWord === param[j]){
                
//                 console.log("Este es el alimento duplicado: ", param[j]);
//             }
//         }
//     }
// }


// var end2 = removeDuplicates(duplicates);
// console.log("Este es el resultado de la Iteración #6: " + end2);



// Iteración #7: Buscador de nombres
// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

// // NO RESUELTO:
// function finderName(param) {
//     var user = prompt("Escribe un nombre: ", "nombre");

//     var exist = param.includes(user);
//     var where = param.lastIndex(who => who == user);

//     if(exist == -1){
//         console.log("El nombre que has añadido no existe");
//     }else {
//         console.log("El nombre que querías buscar es: " + user + " y sí existe.");
//     }
// }
// finderName(nameFinder);

// var end3 = finderName(nameFinder);
// console.log("Este es el resultado de la Iteración #7: " + end3);

// Iteration #8: Contador de repeticiones
// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function repeatCounter(param) {
    // insert code
}

var end4 = repeatCounter(counterWords);
console.log("Este es el resultado de la Iteración #8: " + end4);


