/*
Queremos hacer que la función 'twoNumbers' retorne un array de dos elementos
cuya suma sea el valor del parámetro 'result'. Los únicos números disponibles
son los que están dentro del parámetro 'arr'.
*/
function twoNumbers(arr = undefined, result = undefined) {
  if (arr === undefined || result === undefined)
    return console.warn("No ingresaste ningun dato");

  if (arr === undefined) return console.warn("Ingresa el Array de datos");
  if (result === undefined) return console.warn("Ingresa el número");

  if (!Array.isArray(arr))
    return console.error("Ingresaste un dato no válido para el Array");

  if (typeof result !== "number")
    return console.error("Ingresaste un dato no válido para el número");

  const sum = arr.reduce((accum, value, i, array) => {
    for (const element of array) {
      if (value + element === result) {
        accum.push(value);
      }
    }
    return accum;
  }, []);

  console.log(`Los números del Array que suman "${result}" son: [${sum}]`);
}

twoNumbers();
twoNumbers([], "HELLO");
twoNumbers("r", 9);
twoNumbers(5);
twoNumbers([2, 7, 11, 15], 13);
