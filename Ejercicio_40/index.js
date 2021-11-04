/*
Suma de array
Nos gustaría crear una función que retorne la suma de todos los números de un array. ¿Podrías hacerlo?
*/

function arraySum(arr) {
  const listNumbers = arr;
  let sum = 0;

  listNumbers.forEach((number) => {
    sum += number;
  });

  console.log(`La suma del array es: ${sum}`);
}

arraySum([1, 1, -5]);
arraySum([5, 6, 8, 9, 4, 5]);
