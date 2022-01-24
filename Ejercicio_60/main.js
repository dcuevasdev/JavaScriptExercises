/*
Queremos hacer que la función 'findDuplicates' retorne un array con todos los
elementos que aparezcan al menos dos veces en el array que nos llega por
parámetro.
*/

function findDuplicates(arr) {
  if (arr.length === 0)
    return console.warn("El Array que ingresaste esta vacío");

  if (!Array.isArray(arr))
    return console.warn(`El dato: (${arr}) que ingresaste no es un Array`);

  const countDuplicate = arr.reduce((accum, item) => {
    if (accum[item]) {
      accum[item] += 1;
    } else {
      accum[item] = 1;
    }

    return accum;
  }, {});

  const duplicates = [];

  for (const key in countDuplicate) {
    if (countDuplicate[key] >= 2) {
      duplicates.push(Number(key));
    }
  }

  console.log(duplicates);
}

findDuplicates([]);
findDuplicates(4);
findDuplicates("Hola");
findDuplicates({});
findDuplicates([1, 2, 3, 4, 5, 6, 1, 9, 0, 3, 4, 4]);
findDuplicates([-1, 2, 10, -1]);
