/*
¿Es String o Number?
Determinar si el valor recibido (value) es 'number' o 'string'
*/

function numOrStr(value) {
  const typeOfValue = typeof value;

  if (typeOfValue === "string") {
    console.log("Is a String");
  } else {
    console.log("Is a Number");
  }
}

console.log(numOrStr(3232));
