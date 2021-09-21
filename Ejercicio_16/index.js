const dataUser = prompt("Ingresa una palabra");
const sizeDataUser = dataUser.length;
const upperDataUser = dataUser.toLocaleUpperCase();
const vowels = ["A", "E", "I", "O", "U"];
let position;

for (let i = 0; i < sizeDataUser; i++) {
  let letters = upperDataUser.charAt(i);
  let validatorVowel = vowels.includes(letters);
  if (validatorVowel) {
    position = i;
    document.write(
      `La posición de la primera vocal en la palabra es: ${position}`
    );
    break;
  }
}
