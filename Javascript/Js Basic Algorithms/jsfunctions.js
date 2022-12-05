//**Iteración #1: Buscar el máximo**
//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
  // insert code
  if(numberOne > numberTwo);{
    return numberOne;
} else{
    return numberTwo;
}
}

//**Iteración #2: Buscar la palabra más larga**
//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let longestWord ="";
for (const element of Array) {
  if (longestWord.lenght < element.length){

  }
return longestWord:
}
const resultado = getLongestWord(avengers);
console.log(resultado);

//**Iteración #3: Calcular la suma**
//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numbers) {
  for (let i = 0; i < param.length; i++) {
    const sumNumbers = numbers[i];
    
  }
}

//**Iteración #4: Calcular el promedio**
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

numbers = [12, 21, 38, 5, 45, 37, 6];
function calculateAverage(numbers) {
  var total = 0
  var count = 0 

   numbers.array.forEach(function(item,index) {
    total += item;
    count++;
    });

    return total / count;
}
console.log(CalculateAverage(numbers));

//**Iteración #5: Calcular promedio de strings**
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(mixedElements) {
  for (let index = 0; index < mixedElements.length; index++) {
    const element = array[index];
    
  }  // insert code
}

//Iteración #6: Valores únicos
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
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
  function removeDuplicates(duplicates) {
    for (let index = 0; index < duplicates.length; index++) {
     for(let j = index ; j+1 < duplicates.lenght; j++){
      if (duplicates[i] == duplicates[j]) {
        duplicates.splice(j == index)
      }

     }
      
    }
    console.log(duplicates)
    // insert code
  
  //Iteración #7: Buscador de nombres
  //Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
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
  function finderName(nameFinder) {
    for (let index = 0; index < nameFinder.length; index++) {
      const element = nameFinder[index];
      return 
      
    }

    // insert code
  }

  //Iteration #8: Contador de repeticiones
  //Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:
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
  function repeatCounter(counterWords) {
    let result = {};
    let encounteredWords = [];

    for (let index = 0; index < counterWords.length; index++) {
      const element = array[index];
      if (encounteredWords.includes(elements)) {
        encounteredWords.push(element)
        
      }else{
        if(result.)
      }
      
    }

    // insert code
  }

