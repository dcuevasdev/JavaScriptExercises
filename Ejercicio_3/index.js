const numbers = [];

let dataUser;

do {
  dataUser = prompt("Ingresa un número");

  if (Number(dataUser) == dataUser) {
    numbers.push(Number(dataUser));
  } else if (dataUser != undefined) {
    alert("Ingresa un valor valido");
  }
} while (dataUser != undefined);

const sum = numbers.reduce(
  (accumulator = 0, currentValue) => accumulator + currentValue
);

document.write(
  `Tú lista de números es: ${numbers} <br/> La suma de tú lista es ${sum}`
);
