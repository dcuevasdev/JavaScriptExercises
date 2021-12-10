/*
12) Programa una función que determine si un número es primo (aquel que
solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/
const primeNumber = (num = undefined) => {
  if ((num = undefined)) return console.log("Ingresa un dato númerico");

  if (typeof num === "string")
    return console.log("No se permiten cadenas de texto, ingresa un número");

  let counter = 0;

  for (let i = num; i > 0; i--) {
    const div = num % i;

    if (div === 0) {
      counter++;
    }
  }

  if (counter === 2) {
    return console.log(`El número ${num} es un número primo`);
  } else {
    return console.log(`El número ${num} no es un número primo`);
  }
};

primeNumber();
primeNumber("fsfhsd");
primeNumber("562");
primeNumber(11);
