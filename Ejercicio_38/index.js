/*
Pares
Queremos que nuestra función 'isEven' retorne un array con todos los números pares que encuentre en el array que nos llega por parámetro.
*/

function isEven(arr) {
  const num = arr;
  const list = [];

  for (let i = 1; i <= num; i++) {
    const operator = i % 2;

    if (operator === 0) {
      list.push(i);
    }
  }

  console.log(list);
}

isEven(10);
