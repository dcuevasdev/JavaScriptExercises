/*
Invertir string
Queremos que la función 'reverseString' retorne el string que nos llega por parámetro pero invertido.
*/

function reverseString(str) {
  const string = str;
  const stringReverse = string.split("").reverse().join("");

  console.log(stringReverse);
}

reverseString("Hola como estas?");
