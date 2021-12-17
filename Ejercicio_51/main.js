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
