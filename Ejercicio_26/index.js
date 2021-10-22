const letters = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];
const dataUserNum = Number(prompt("Ingresa tú número de DNI"));

const validNum = dataUserNum <= 99999999 ? true : false;

if (validNum) {
  const dataUserLetter = prompt("Ingresa la letra de tú DNI").toUpperCase();
  const calc = dataUserNum % 23;
  const search = letters[calc];

  if (search === dataUserLetter) {
    document.write(
      `El número de DNI: ${dataUserNum} y la letra: ${dataUserLetter} que ingresaste son correctas `
    );
  } else {
    document.write(`La letra: ${dataUserLetter} que ingresaste no es correcta`);
  }
} else {
  document.write(`El número: ${dataUserNum} no es valido`);
}
