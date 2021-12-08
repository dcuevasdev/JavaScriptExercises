/*
1) Programa una función que invierta las palabras de una cadena de texto, pe.
miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
const invertWord = (string = undefined) => {
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

invertWord("Hola Mundo");

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

/*
3) Programa una función que valide si una palabra o frase dada, es un palíndromo
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas")
devolverá true.
*/
const invertWord = (string) => {
  let newWord = "";

  for (let i = string.length - 1; i >= 0; i--) {
    const letter = string.charAt(i);
    newWord = newWord + letter;
  }
  return newWord;
};

const palindromeWord = (word = undefined) => {
  if (word === undefined) return console.warn("No ingresaste ningún dato");

  const validatorNumber = typeof word;
  if (validatorNumber === "number")
    return console.log("Ingresa un valor válido que sea tipo string");

  const lowerWord = word.toLowerCase().replace(/ /g, "");
  const lowerInvertWord = invertWord(word).toLowerCase().replace(/ /g, "");

  lowerWord === lowerInvertWord ? console.log(true) : console.log(false);
};

palindromeWord("Dabale arroz a la zorra el abad");
palindromeWord("Hola Daniel");
palindromeWord("SaLas");

/*
4) Programa una función que elimine cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
devolverá  "1, 2, 3, 4 y 5.
*/

const removePattern = (text = undefined, pattern = undefined) => {
  if (text === undefined || pattern === undefined)
    return console.warn("Ingresa un valor para el texto y el patron repetido");

  if (typeof text === "number" || typeof pattern === "number")
    return console.log("Ingresa un valores válidos que sean tipo string");

  const re = new RegExp(pattern, "ig");
  const remove = text.replace(re, "");

  return console.log(remove);
};

removePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
