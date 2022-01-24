/*
Queremos que la función isObject devuelva true si value es un objeto, y false
si no lo es
*/

function isObject(value) {
  Object.prototype.toString.call(value) === "[object Object]"
    ? console.log(true)
    : console.log(false);
}

isObject({ name: "CourseIt" });
isObject(30);
isObject(true);
isObject(["g", "f", 5, 6]);
isObject("Hola");
isObject(undefined);
