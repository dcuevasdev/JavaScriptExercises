/*
1) Programa una función que dado un array numérico devuelve otro array
con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá
[1, 16, 25].
*/
const exponent = (arr = undefined) => {
  if (arr === undefined) return console.log("Debes ingresar un Array");

  if (Object.prototype.toString.call(arr) === "[object Object]")
    return console.log(`El valor que ingresaste no es válido`);

  if (typeof arr === "string" || typeof arr === "number")
    return console.log(`El valor "${arr}" no es un Array`);

  if (Array.isArray(arr)) {
    const newData = arr.map((element) => {
      return Math.pow(element, 2);
    });
    console.log(newData);
  }
};
exponent();
exponent(1);
exponent("Hola");
exponent({ one: 1, two: 2 });
exponent([1, 4, 5]);

/*
2)Programa una función que dado un array devuelva el número mas alto y
el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60])
devolverá [99, -60].
*/
const maxMin = (arrayNumbers = undefined) => {
  if (arrayNumbers === undefined) return console.log("Debes ingresar un Array");

  if (Object.prototype.toString.call(arrayNumbers) === "[object Object]")
    return console.log(`El valor que ingresaste no es válido`);

  if (typeof arrayNumbers === "string" || typeof arrayNumbers === "number")
    return console.log(`El valor "${arrayNumbers}" no es un Array`);

  if (arrayNumbers.length === 0) return console.log("Ingresa datos al Array");

  const order = arrayNumbers.sort((a, b) => {
    return a - b;
  });

  const maxMin = [];
  maxMin.push(order[0]);
  maxMin.push(order[order.length - 1]);
  console.log(maxMin);
};

maxMin();
maxMin(1);
maxMin("Hola");
maxMin({ one: 1, two: 2 });
maxMin([1, 4, 5, 99, -60]);
maxMin([]);
