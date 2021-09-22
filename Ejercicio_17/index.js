const dataUser = Number(prompt("Introduce un número entre 1 y 100"));

let currently;
let OneLessCurrently = 1;
let twoLessCurrently = 0;

document.write(twoLessCurrently + "<br>");

for (let i = 0; i < dataUser - 1; i++) {
  currently = twoLessCurrently + OneLessCurrently;
  document.write(currently + "<br>");
  OneLessCurrently = twoLessCurrently;
  twoLessCurrently = currently;
}
