const dataUser = prompt("Ingresa un número para conocer su factorial");
const dataUserNumber = Number(dataUser);

function factorial(num) {
  let result = num;

  for (let i = 1; i < num; i++) {
    const subtract = num - i;
    result = result * subtract;
  }

  document.write(
    `El factorial del número ${num} es: <strong> ${result} </strong>`
  );
}

factorial(dataUserNumber);
