const dataUser = Number(prompt("Ingresa un número"));

function pairOdd(num) {
  const operation = num % 2 === 0;

  if (operation) {
    document.write(`El número ${dataUser} es un número PAR`);
  } else {
    document.write(`El número ${dataUser} es un número IMPAR`);
  }
}

pairOdd(dataUser);
