/*
Queremos hacer que la función 'unique' retorne un array con todos los elementos
que aparezcan solo una vez en el array que nos llega por parámetro.
*/
function unique(arr) {
  const counterElements = arr.reduce((obj, item) => {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }

    return obj;
  }, {});

  const repeatedElements = [];

  for (const element in counterElements) {
    if (counterElements[element] === 1) {
      if (Number(element) || Number(element) === 0) {
        repeatedElements.push(Number(element));
      } else {
        repeatedElements.push(element);
      }
    }
  }

  console.log(`Los elementos que no están repetidos son [${repeatedElements}]`);
}

unique([23, 1, -70, 1, 2, 2]);
unique([4, 4, 4, 4, 4]);
unique([-1, "a", "b", "a", 0]);
