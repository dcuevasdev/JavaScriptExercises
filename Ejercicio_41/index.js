/*
Encuentra la posición en el array
En base a un array ordenado 'arr', en que posicion se tendria que insertar 'num'? Si 'num' ya existe devolver su posicion actual. Por ejemplo: [10, 20, 30], 20 tendría que devolver 1
*/

const arr = [-15, 10, 20, 30];
const num = 15;

const findNumber = arr.find((number) => {
  return number === num;
});

function insertPosition(arr, num) {
  const listNumbers = arr;
  const number = num;

  if (findNumber === number) {
    const currentPosition = listNumbers.indexOf(number);
    console.log(`El elemento se encuentra en la posición: ${currentPosition}`);
    console.log(listNumbers);
  } else {
    const newArr = [...listNumbers, num];

    const orderArr = newArr.sort((a, b) => {
      return a - b;
    });

    const newPosition = orderArr.indexOf(number);
    console.log(`El elemento se encuentra en la posición: ${newPosition}`);
    console.log(orderArr);
  }
}

insertPosition(arr, num);
