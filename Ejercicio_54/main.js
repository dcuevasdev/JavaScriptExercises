/*
1) Programa una función que dado un arreglo de números devuelva un objeto con
dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el
segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6])
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
const orderArr = (arr) => {
  if (arr === undefined) return console.log("Debes ingresar un Array");

  if (Object.prototype.toString.call(arr) === "[object Object]")
    return console.log(`El valor que ingresaste no es válido`);

  if (typeof arr === "string" || typeof arr === "number")
    return console.log(`El valor "${arr}" no es un Array`);

  if (arr.length === 0) return console.log("Ingresa datos al Array");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.log(`El Array continene datos que nos son númericos`);
  }

  const order = {
    asc: arr.sort((a, b) => {
      return a - b;
    }),
    desc: arr.slice().reverse(),
  };

  console.log(order);
};

orderArr();
orderArr(1);
orderArr("Hola");
orderArr({ one: 1, two: 2 });
orderArr([1, 4, 5, 99, -60, {}]);
orderArr([]);
orderArr([7, 5, 7, 8, 6]);
