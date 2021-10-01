let taxesProduct = (price, tax) => {
  if (tax === 0) {
    const taxes = 21;
    const calc = (price * taxes) / 100 + price;

    document.write(`El precio a pagar + iva es de: $${calc}`);
  } else {
    const calc = (price * tax) / 100 + price;

    document.write(`El precio a pagar + iva es de: $${calc}`);
  }
};

const askPrice = Number(prompt("Ingresa el precio"));
const askTaxes = Number(prompt("Ingresa el IVA"));

taxesProduct(askPrice, askTaxes);
