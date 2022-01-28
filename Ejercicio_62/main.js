/*
Queremos que la función nextPalindrome devuelva el siguiente número a 'n' que
sea palíndromo o 'n' si es palíndromo
*/
function nextPalindrome(n) {
  let number = n;
  let validator = false;

  while (!validator) {
    const transformToString = String(number);
    const numberReverse = transformToString.split("").reverse().join("");

    if (transformToString === numberReverse) {
      console.log(
        `El siguiente palíndromo al número ${n} es el número ${numberReverse}`
      );
      validator = true;
    } else {
      number += 1;
    }
  }
}

nextPalindrome(310);
nextPalindrome(50);
nextPalindrome(936);
nextPalindrome(11);
