/*
Determinar siglo
Queremos que la función whichCentury retorne el siglo en base a un año que nos llega como parámetro. Por ejemplo para el parámetro 2000 tiene que retornar 20
*/

function whichCentury(num) {
  const transform = String(num);
  const size = transform.length;

  const validatorOne = transform[size - 1];
  const validatorTwo = transform[size - 2];

  if (size === 2) {
    console.log(`El año ${transform} pertenece al siglo 1`);
  } else if (validatorOne === "0" && validatorTwo === "0") {
    switch (size) {
      case 3:
        const sliceNumberOne = transform.slice(0, 1);
        console.log(`El año ${transform} pertenece al siglo ${sliceNumberOne}`);
        break;
      default:
        const sliceNumberTwo = transform.slice(0, 2);
        console.log(`El año ${transform} pertenece al siglo ${sliceNumberTwo}`);
        break;
    }
  } else if (validatorOne != 0 || validatorTwo != 0) {
    switch (size) {
      case 3:
        const sliceNumberOne = Number(transform.slice(0, 1));
        const calcCenturyOne = sliceNumberOne + 1;
        console.log(`El año ${transform} pertenece al siglo ${calcCenturyOne}`);
        break;
      default:
        const sliceNumberTwo = Number(transform.slice(0, 2));
        const calcCenturyTwo = sliceNumberTwo + 1;
        console.log(`El año ${transform} pertenece al siglo ${calcCenturyTwo}`);
        break;
    }
  }
}

whichCentury(2000);
