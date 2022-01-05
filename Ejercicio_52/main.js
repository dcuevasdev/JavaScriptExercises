/*
1)Programa una función que dada una cadena de texto cuente el número de
vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4,
Consonantes: 5.
*/
const counterOfWords = (text) => {
  const lowerText = text.toLowerCase().replace(/ /g, "");
  const textArray = lowerText.split("");
  let counterVocals = 0;
  let counterConsonants = 0;

  for (const element of textArray) {
    switch (element) {
      case "a":
        counterVocals += 1;
        break;
      case "e":
        counterVocals += 1;
        break;
      case "i":
        counterVocals += 1;
        break;
      case "o":
        counterVocals += 1;
        break;
      case "u":
        counterVocals += 1;
        break;
      default:
        counterConsonants += 1;
        break;
    }
  }
  console.log(`Vocales: ${counterVocals}`);
  console.log(`Consonantes: ${counterConsonants}`);
};

counterOfWords("Hola Mundo");
