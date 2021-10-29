/*Invertir Array
  Vamos a recibir un array, y debemos invert
*/

const arr = [1, 2, 3, 4, 89];

function reverseArray(arr) {
  const newArray = [];

  for (let i = arr.length; i > 0; i--) {
    newArray.push(arr[i - 1]);
  }

  console.log(newArray);
}

reverseArray(arr);
