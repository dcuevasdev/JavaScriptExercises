const values = [true, 5, false, "hola", "adios", 2];

//Texto mayor
const findString = values.filter((value) => {
  return typeof value == "string";
});

const findNumber = values.filter((value) => {
  return typeof value == "number";
});

function stringGreatest() {
  const order = findString.sort((a, b) => {
    return a.length - b.length;
  });

  document.write(
    `La cadena de texto más larga es <strong>${
      order[order.length - 1]
    }</strong> <br/>`
  );
}

stringGreatest();

//Booleanos

const findBoolean = values.filter((value) => {
  return typeof value == "boolean";
});

function booleans() {
  for (const element of findBoolean) {
    if (element === true) {
      document.write(`<strong>${findBoolean[0]}</strong> <br/>`);
    } else {
      document.write(`<strong>${findBoolean[1]}</strong> <br/>`);
    }
  }
}
booleans();
