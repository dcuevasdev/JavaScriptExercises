const numMin = Number(prompt("Ingresa el número menor"));
const numMax = Number(prompt("Ingresa el número mayor"));

function numbers(numMin, numMax) {
  const includeMax = numMax + 1;

  if (numMin == 0 && numMax == 0) {
    return Math.floor(Math.random() * (101 - 1) + 1);
  } else {
    return Math.floor(Math.random() * (includeMax - numMin) + numMin);
  }
}

const numberRandom = numbers(numMin, numMax);

document.write(`El numero aleatorio es ${numberRandom}`);
