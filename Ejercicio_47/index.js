/*
1) Programa una función que cuente el número de caracteres de
una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

function numberOfCharacters(string) {
  const userData = string;
  const userDataSize = userData.length;

  typeof userData === "string"
    ? console.log(`Los caracteres del string son: ${userDataSize}`)
    : console.log("Ingresa un dato tipo String");
}

numberOfCharacters("Hola Mundo");

/* 2) Programa una función que te devuelva el texto recortado según el número
 de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

function cutText(inputText, numbertocut) {
  const newText = inputText.slice(0, numbertocut);
  console.log(newText);
}
cutText("Hola Mundo", 4);

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por
cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

function textToArray(text, character) {
  const size = text.length;
  const transform = text.split(character, size);

  console.log(transform);
}

textToArray("Hola que tal", " ");
