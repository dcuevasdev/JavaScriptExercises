/*
1) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
const random = (num1, num2) => {
  const number = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

  console.log(number);
};

random(501, 600);

/*
2) Programa una función que reciba un número y evalúe si es capicúa
o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002)
devolverá true.
*/
const capicua = (num = undefined) => {
  if (typeof num === "string" || num === undefined)
    return console.log("Ingresa un dato de tipo number");

  const convertToString = String(num);
  const invertNumber = convertToString.split("").reverse().join("");

  invertNumber === convertToString ? console.log(true) : console.log(false);
};

capicua(9889);

/*
3) Programa una función que calcule el factorial de un número (El factorial de un
entero positivo n, se define como el producto de todos los números enteros
positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
const factorial = (num) => {
  let mult = num;

  for (let i = num - 1; i > 0; i--) {
    mult = mult * i;
  }
  return console.log(`El factorial del número ${num} es ${mult}`);
};

factorial(5);
