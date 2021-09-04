let dataUser = prompt("Ingresa un número igual o menor a 50");

if (Number(dataUser) > 50) {
  alert("Ingresa un numero valido");
} else {
  for (let i = 1; i <= Number(dataUser); i++) {
    for (let rep = 1; rep <= i; rep++) {
      document.write(rep);
    }
    document.write("<br>");
  }
}
