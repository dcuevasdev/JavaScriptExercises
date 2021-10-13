const possibleResults = [1, 2, 3, 4, 5, 6];
const resultsPlus = [];

for (let i = 0; i < 36000; i++) {
  const oneDice = Math.floor(Math.random() * possibleResults.length);
  const twoDice = Math.floor(Math.random() * possibleResults.length);

  const optionOneDice = possibleResults[oneDice];
  const optionTwoDice = possibleResults[twoDice];

  const sum = optionOneDice + optionTwoDice;

  resultsPlus.push(sum);
}

console.log(resultsPlus);
