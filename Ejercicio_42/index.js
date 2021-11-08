/*
Mayor repetido
Queremos saber cuantas veces se repite el número más grande de un array. El valor que tiene que devolver la función es un número
*/

const listNumbers = [
  100, 5, 20, 100, 3, 6, 100, 9, 8, 100, 96, -100, -36, -4, 100, 12, 58, 62,
];

const orderNumbers = listNumbers.sort((a, b) => {
  return a - b;
});

function countGreater(arr) {
  const list = arr;
  const lastPosition = list[list.length - 1];
  let counter = 0;

  for (const number of list) {
    if (number === lastPosition) {
      counter++;
    }
  }

  console.log(counter);
}

countGreater(orderNumbers);
