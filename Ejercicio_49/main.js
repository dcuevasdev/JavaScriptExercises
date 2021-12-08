/*
1) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
const random = (num1, num2) => {
  const number = Math.floor(Math.random() * (num2 + 1 - num1) + num1);

  console.log(number);
};

random(501, 600);
