/*
Vocales
Queremos hacer que la función 'vowelCounter' retorne la cantidad de vocales que tiene el parámetro 'str
*/

function vowelCounter(str) {
  const string = str;
  let counter = 0;

  for (const letter of string) {
    const letterUpper = letter.toUpperCase();

    if (
      letterUpper === "A" ||
      letterUpper === "E" ||
      letterUpper === "I" ||
      letterUpper === "O" ||
      letterUpper === "U"
    ) {
      counter++;
    }
  }
  console.log(counter);
}

vowelCounter("Daniel");
