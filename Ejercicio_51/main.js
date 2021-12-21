/*
1) Programa una función que devuelva el monto final después de aplicar un
descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/
const discount = (price = undefined, discountPercent = undefined) => {
  if (price === undefined || discountPercent === undefined)
    return console.log("Ingresa el precio y el descuento");

  if (typeof price === "string" || typeof discountPercent === "string")
    return console.log("Ingresa valores válidos tipo number");

  if (discountPercent === 0)
    return console.log(`No tienes descuento debes pagar $${price}`);

  const calcDiscount = (price * discountPercent) / 100;
  const calcNewPrice = price - calcDiscount;

  console.log(`Debes pagar $${calcNewPrice}`);
};
discount(1000, 20);
discount("Hola", 89);
discount(2000, 0);
discount(89, "Hola");
discount();
discount(1000);

/*
2) Programa una función que dada una fecha válida determine cuantos años han
pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23))devolverá 36 años
(en 2020).
*/

const calcAge = (date) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const yearBornDate = date.getFullYear();

  if (date.getMonth() < currentDate.getMonth()) {
    const age = currentYear - yearBornDate;

    console.log(`Usted tiene ${age} años`);
  } else {
    const age = currentYear - yearBornDate - 1;
    console.log(`Usted tiene ${age} años`);
  }
};

calcAge(new Date(1997, 11, 24));
