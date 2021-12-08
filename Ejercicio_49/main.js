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
