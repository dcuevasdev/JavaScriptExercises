const dataUser = prompt("Ingresa una palabra o una frase");
const dataUserUppercase = dataUser.toUpperCase();
let accountant = 0;

for (let lyrics of dataUserUppercase) {
  let oneLyrics = lyrics;

  if (
    oneLyrics == "A" ||
    oneLyrics == "E" ||
    oneLyrics == "I" ||
    oneLyrics == "O" ||
    oneLyrics == "U"
  ) {
    accountant++;
  }
}
document.write(`La paralabra "${dataUser}" tiene: ${accountant}  vocales`);
