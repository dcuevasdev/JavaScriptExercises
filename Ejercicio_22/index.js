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
