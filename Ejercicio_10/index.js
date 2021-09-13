const results = [1, "X", 2];

for (let i = 1; i <= 14; i++) {
  let random = Math.floor(Math.random() * results.length);
  document.write(`Resultado ${i}: ${results[random]} <br>`);
}
