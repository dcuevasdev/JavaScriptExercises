/*
1)Programa una función que dada una cadena de texto cuente el número de
vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4,
Consonantes: 5.
*/
const counterOfWords = (text) => {
  const textArray = text.toLowerCase().replace(/ /g, "");
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

/*
2) Programa una función que valide que un texto sea un nombre válido,
pe. miFuncion("Jonathan MirCha") devolverá verdadero
*/
const validName = (name) => {
  const deleteSpace = name.replace(/ /g, "").split("").join("");
  const expRegOne = /\d/g;
  const expRegTwo = /\W/g;

  if (expRegOne.test(deleteSpace) || expRegTwo.test(deleteSpace)) {
    console.log(
      "El nombre que ingresaste no es valido, contiene caracteres no válidos"
    );
  } else {
    console.log(`El nombre "${name}" es váido`);
  }
};

validName("Daniel Cuevas");

/*
3)Programa una función que valide que un texto sea un email válido,
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
const validEmail = (email) => {
  const expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

  if (expReg.test(email)) {
    console.log(`El E-mail "${email}" es váido`);
  } else {
    console.log("El E-mail que ingresaste no es válido");
  }
};

validEmail("Daniel@gmail.com");
