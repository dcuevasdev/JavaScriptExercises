/*
Encontrar string
Queremos saber cuántas veces se encuentra target dentro de string
*/

function findSubstring(target, string) {
  const sizeTarget = target.length;
  const sizeString = string.length;
  let counter = 0;

  for (let i = 0; i < sizeString; i++) {
    const positionCurrentTarget = string.indexOf(target, i);
    const positionPreviousTarget = string.indexOf(target, i - 1);
    const sliceString = string.slice(
      positionCurrentTarget,
      positionCurrentTarget + sizeTarget
    );

    if (
      positionCurrentTarget !== -1 &&
      sliceString === target &&
      positionCurrentTarget === positionPreviousTarget
    ) {
      counter++;
    }
  }
  console.log(`La palabra ${target} se repite en ${string} ${counter} veces`);
}

findSubstring("ara", "arararara");
