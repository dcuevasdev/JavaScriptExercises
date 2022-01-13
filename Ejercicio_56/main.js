/*
Queremos encontrar y retornar el siguiente número más grande (usando los mismos
dígitos) al que nos llega en el parámetro 'num'. Por ejemplo: 2019 -> 2091
*/
function permutation(text) {
  if (text.length <= 2) {
    return text.length === 2 ? [text, text[1] + text[0]] : [text];
  }

  return text
    .split("")
    .reduce(
      (a, c, i) =>
        a.concat(
          permutation(text.slice(0, i) + text.slice(i + 1)).map((v) => c + v)
        ),
      []
    );
}

function nextLargerNumber(num = undefined) {
  if (num === undefined) return console.log("No ingresaste ningun dato");

  if (typeof num === "string") return console.log("Ingresa un dato válido ");

  const changeData = String(num);

  if (changeData.length === 1)
    return console.log("Ingresa un número de almenos dos cifras");

  const permutations = permutation(changeData);

  const isGreater = permutations
    .map((element) => Number(element))
    .filter((element) => element > num);

  return console.log(Math.min(...isGreater));
}

nextLargerNumber();
nextLargerNumber("Hola");
nextLargerNumber(12);
nextLargerNumber(2019);
nextLargerNumber(512);
nextLargerNumber(23);
nextLargerNumber(1500);
