/*
1) Programa una función que invierta las palabras de una cadena de texto, pe.
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

investWord("Hola Mundo");

/*
2) Programa una función para contar el número de veces que se repite una
palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo")
devolverá 2
*/
const repeatWord = (string = undefined, repeat) => {
  if (string === undefined) return console.warn("No ingresaste ningún dato");

  const validatorNumber = typeof string;
  if (validatorNumber === "number")
    return console.warn("Ingresa un valor válido que sea tipo string");

  const transformString = string.toLowerCase();
  const transformRepeat = repeat.toLowerCase();

  const arrayWord = transformString.split(" ");
  let counter = 0;

  arrayWord.forEach((element) => {
    if (element === transformRepeat) {
      counter = counter + 1;
    }
  });

  if (counter === 0) return console.log("Ninguna palabra se repite");

  return console.log(`La palabra ${repeat} se repite ${counter} veces`);
};

repeatWord("hola mundo adios mundo", "mundo");
