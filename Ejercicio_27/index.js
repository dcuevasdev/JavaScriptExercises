/*Invertir Array
  Vamos a recibir un array, y debemos invert
*/

const arr = [4, 2, 1, -10000, -7];

function reverseArray(arr) {
  const newArray = [];

  for (let i = arr.length; i > 0; i--) {
    newArray.push(arr[i - 1]);
  }

  console.log(newArray);
}

reverseArray(arr);
