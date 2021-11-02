/*
Invertir numero
Queremos que nuestra función 'invertNumber' nos devuelva el número que nos llega por parámetro pero de atrás para adelante.
*/

function invertNumber(num) {
  const number = String(num);
  const numberReverse = number.split("").reverse().join("");

  console.log(numberReverse);
}

invertNumber(1997);
