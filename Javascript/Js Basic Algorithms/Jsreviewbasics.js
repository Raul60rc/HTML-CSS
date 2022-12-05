//**Iteración #1: Mix for e includes**
//Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

for (const movies of categories) {
  return categories
  
}
//**Iteración #2: Mix Fors**
//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let sum = 0
let cont = 0 

for (const user of users)
 for (const key in user.favoritesSounds){
  sum += user.favoritesSounds [key].volume;
  cont++;
 }

 console.log (suma/cont);

//**Iteración #3: Mix Fors**
//Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
//Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.
const user = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let waves = 0;
let wind = 0;
let count = 0

for (const user of users) {
  console.log(user.favoritesSounds)

  for(const sound in a user.favoritesSounds)
  console.log('sound, sound');
}

//**Iteración #4: Métodos findArrayIndex**
//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.
//Sugerencia de función:
function findArrayIndex(array, text) {}
//Ejemplo ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

//**Iteración #5: Función rollDice**
//Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();**
let = dice {
  sides : 6; 
  roll : function (){
    var randomNumber = 
    Math.floor(Math.random() * (sides) +1;
    return randomNumber;

  }
  
}

//**Iteración #6: Función swap**
//Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.
//Sugerencia de array:

// Solucion Carlota
const fakePlayers = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array,index1, index2){
 array.splice(index2, 1, array[index1]);
 array.splice(index1 , 1, array[index2]);

return (array);
}
console.log(swap(fakePlayers, 0,1));
console.log(swap(fakePlayers, 0,3));

// solucion Neftali 
function swap (arr, index1, index2) {

  let tmpWord = words[index1]; // Guardamos la palabra del primer indice

  arr[index1] = arr[index2]; // Modificamos el valor del primer indice por la del segundo

  arr[index2] = tmpWord; // Modificamos el valor del segundo indice por la palabra guardada como tmpWord

 

}

const swap = (arr, i1, i2) => arr[i1] = arr.splice(i2, 1, arr[i1])[0]