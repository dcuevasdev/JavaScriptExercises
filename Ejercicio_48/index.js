/*
5) Programa una función que invierta las palabras de una cadena de texto, pe.
miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
const investWord = (string = undefined) => {
  if (string === undefined) return console.warn("No ingresaste ningún dato");

  const validatorNumber = typeof string;
  if (validatorNumber === "number")
    return console.warn("Ingresa un valor válido que sea tipo string");

  let newWord = "";

  for (let i = string.length - 1; i >= 0; i--) {
    const letter = string.charAt(i);
    newWord = newWord + letter;
  }
  return console.log(newWord);
};

investWord(56);
