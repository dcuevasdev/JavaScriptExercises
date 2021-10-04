const dataUser = prompt("Ingresa una palabra");
const dataUserLength = dataUser.length;
let letter = "";

let upsideDownText = (dataText) => {
  for (let i = dataUserLength - 1; i >= 0; i--) {
    letter = letter + dataUser.charAt(i);
  }
};

upsideDownText(dataUser);
document.write(
  `La palabra que ingresaste se escribe al revés de la siguiente forma: <strong>${letter}</strong>`
);
