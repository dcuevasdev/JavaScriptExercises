/*
1) Programa una función que dado un array numérico devuelve otro array
con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá
[1, 16, 25].
*/
const exponent = (arr = undefined) => {
  if (typeof arr === undefined) return console.log("Debes ingresar un Array");

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
