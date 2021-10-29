/*
Eliminar 13
Vamos a recibir un array, tenemos que eliminar todos los múltiplos de 13 y devolver el array
*/

const numbers = [1, 50, 13, 87, 104, 26, 39, 10, 115, 91];

function removeThirteen(arr) {
  const newArray = [];

  for (let element of arr) {
    if (element % 13 != 0) {
      newArray.push(element);
    }
  }

  return newArray;
}

console.log(removeThirteen(numbers));
