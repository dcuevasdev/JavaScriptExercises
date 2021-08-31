const qualification = [
  "muy deficiente",
  "insuficiente",
  "suficiente",
  "bien",
  "notable",
  "sobresaliente",
];

const value = Number(prompt("Ingresa el valor de la nota"));

if (Number.isInteger(value) && value <= 10) {
  if (value < 3) {
    document.write(
      `Tú nota es ${value} y tú calificación es ${qualification[0]}`
    );
  } else if (value < 5) {
    document.write(
      `Tú nota es ${value} y tú calificación es ${qualification[1]}`
    );
  } else if (value < 6) {
    document.write(
      `Tú nota es ${value} y tú calificación es ${qualification[2]}`
    );
  } else if (value < 7) {
    document.write(
      `Tú nota es ${value} y tú calificación es ${qualification[3]}`
    );
    85;
  } else if (value < 9) {
    document.write(
      `Tú nota es ${value} y tú calificación es ${qualification[4]}`
    );
  } else if (value >= 9) {
    document.write(
      `Tú nota es ${value} y tú calificación es ${qualification[5]}`
    );
  }
} else {
  document.write("Ingresa una nota valida");
}
