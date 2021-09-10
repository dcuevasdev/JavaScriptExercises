const start = 1;
const end = 100;
const numbers = [];

while (numbers.length < 3) {
  let random = Math.floor(Math.random() * (end - start) + start);

  if (numbers.length == 0) {
    numbers.push(random);
  }

  if (random != numbers[0] && random != numbers[1]) {
    numbers.push(random);
  }
}

document.write(`Los números aleatorios son: ${numbers}`);
