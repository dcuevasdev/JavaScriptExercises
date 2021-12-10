/*
12) Programa una función que determine si un número es primo (aquel que
solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/
const primeNumber = (num = undefined) => {
  if (num === undefined) return console.log("Ingresa un dato númerico");

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

/*
2) Programa una función que determine si un número es par o impar,
pe. miFuncion(29) devolverá Impar.
*/

const isPair = (num = undefined) => {
  if (num === undefined) return console.log("Ingresa un dato númerico");

  if (typeof num === "string")
    return console.log("No se permiten cadenas de texto, ingresa un número");

  return num % 2 === 0
    ? console.log(`El número ${num} es par`)
    : console.log(`El nùmero ${num} es impar`);
};

isPair();
isPair(11);
isPair(600);
isPair(159669);
isPair("Fskfhsldkf");

/*
3) Programa una función para convertir grados Celsius a Fahrenheit
y viceversa, pe. miFuncion(0,"C") devolverá 32°F
*/
const convert = (transform = undefined, type = undefined) => {
  if (transform === undefined && type === undefined)
    return console.log(
      "Ingrese el valor a convertir y seleccione que conversión desea realizar"
    );

  if (transform === undefined)
    return console.log("Ingrese el valor a convertir");

  if (type === undefined)
    return console.log("Seleccione que conversión desea realizar");

  if (typeof transform === "string" || typeof type === "string")
    return console.log("Ingresa un tipo de dato valido");

  switch (type) {
    case 1:
      const celsiusToFahrenheit = transform * 1.8 + 32;
      console.log(`${transform}ºC equivalen a ${celsiusToFahrenheit}ºF`);
      break;
    case 2:
      const fahrenheitToCelsius = (transform - 32) * (5 / 9);
      console.log(`${transform}ºF equivalen a ${fahrenheitToCelsius}ºC`);
      break;
    default:
      console.log("Ingrese la conversion que sea realizar de forma correcta");
      break;
  }
};

convert();
convert(5);
convert(32, "Hola");
convert("hola", 32);
convert(32, 2);
convert(0, 1);
convert(50, 3);
convert(50, 1);
convert(10, 2);
