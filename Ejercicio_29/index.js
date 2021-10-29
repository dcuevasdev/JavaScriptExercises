/*
Encontrar letra en el abecedario
Encontrar la letra en el abecedario (sin ñ) según el número, si no se encuentra devolver el string 'invalid'
*/

const abc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function positionInAlphabet(num) {
  if (abc[num] === undefined) {
    console.log("invalid");
  } else {
    console.log(`La letra es ${abc[num]}`);
  }
}

positionInAlphabet(5);
