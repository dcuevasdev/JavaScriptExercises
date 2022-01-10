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

const otherMinMax = (num = undefined) => {
  if (num === undefined) return console.log("Debes ingresar un Array");

  if (Object.prototype.toString.call(num) === "[object Object]")
    return console.log(`El valor que ingresaste no es válido`);

  if (typeof num === "string" || typeof num === "number")
    return console.log(`El valor "${num}" no es un Array`);

  if (num.length === 0) return console.log("Ingresa datos al Array");

  const maxMin = [Math.min(...num), Math.max(...num)];
  console.log(maxMin);
};

otherMinMax();
otherMinMax(1);
otherMinMax("Hola");
otherMinMax({ one: 1, two: 2 });
otherMinMax([1, 4, 5, 99, -60]);
otherMinMax([]);

/*
3)Programa una función que dado un array de números devuelva un objeto con 2
arreglos en el primero almacena los números pares y en el segundo los
impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0],
impares: [1,3,5,7,9]}.
*/
const evenOdd = (arrayNumbers) => {
  if (arrayNumbers === undefined) return console.log("Debes ingresar un Array");

  if (Object.prototype.toString.call(arrayNumbers) === "[object Object]")
    return console.log(`El valor que ingresaste no es válido`);

  if (typeof arrayNumbers === "string" || typeof arrayNumbers === "number")
    return console.log(`El valor "${arrayNumbers}" no es un Array`);

  if (arrayNumbers.length === 0) return console.log("Ingresa datos al Array");

  const classification = {
    even: [],
    odd: [],
  };

  const sortOrder = arrayNumbers.map((number) => {
    if (number % 2 === 0) {
      classification.even.push(number);
    } else {
      classification.odd.push(number);
    }
  });

  console.log(classification);
};

evenOdd();
evenOdd(1);
evenOdd("Hola");
evenOdd({});
evenOdd([]);
evenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
