/*
Encontrá el opuesto
Dado un número entero, retornar el opuesto.
*/

function opposite(a) {
  const number = a;
  const validator = Math.sign(number);
  const signChange = number * -1;

  if (validator === 1) {
    console.log(`El número opuesto es: ${signChange}`);
  } else {
    console.log(`El número opuesto es: ${signChange}`);
  }
}

opposite(56895);
opposite(-689);
