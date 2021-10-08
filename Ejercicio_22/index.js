const values = [true, 5, false, "hola", "adios", 2];

const findString = values.filter((value) => {
  return typeof value == "string";
});

const findNumber = values.filter((value) => {
  return typeof value == "number";
});

const findBoolean = values.filter((value) => {
  return typeof value == "boolean";
});

function stringGreatest() {
  const order = findString.sort((a, b) => {
    return a.length - b.length;
  });

  document.write(
    `La cadena de texto más larga es <strong>${
      order[order.length - 1]
    }</strong> `
  );
}

stringGreatest();
