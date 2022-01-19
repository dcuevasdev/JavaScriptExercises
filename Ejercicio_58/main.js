/*
Queremos aplicar el algoritmo binary search' y retornar la cantidad de
iteraciones que tiene que hacer hasta encontrar el número indicado en el
parametro 'numToFind'
*/

function sortArray(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
}

function isPair(arr) {
  if (arr.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function binarySearch(arr, numToFind) {
  const orderArray = sortArray(arr);
  const copyArray = arr.map((element) => element);
  let iterations = 0;

  while (copyArray.length >= 1) {
    let halfPosition = 0;
    iterations += 1;

    if (isPair(copyArray)) {
      halfPosition = copyArray.length / 2;
    } else {
      halfPosition = Math.floor(copyArray.length / 2);
    }

    if (copyArray[halfPosition] > numToFind) {
      copyArray.splice(
        copyArray.indexOf(copyArray[halfPosition]),
        copyArray.length - 1
      );
    }

    if (copyArray[halfPosition] < numToFind) {
      copyArray.splice(0, copyArray.indexOf(copyArray[halfPosition]));
    }

    if (copyArray[halfPosition] === numToFind)
      return console.log(
        `Encontraste el número ${numToFind} despúes de ${iterations} iteraciones`
      );
  }
}

binarySearch([2, 5, 8, 12, 23, 38, 56, 91, 72], 72);
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
binarySearch([2, 5, 8, 12, 23, 38, 56, 72, 91], 2);
binarySearch([2, 5, 8, 12, 23, 38, 56, 91, 72], 23);
