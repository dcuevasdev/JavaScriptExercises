/*
Días entre dos fechas
Queremos crear una funcion que nos diga la cantidad de días que existe entre
la fecha 1 y la fecha 2. Los parametros de entrada son objetos fecha de
Javascript
*/
function daysBetween(date1, date2) {
  const operation = date1 - date2;
  const secondsInDay = 1000 * 60 * 60 * 24;
  const transform = operation / secondsInDay;

  console.log(
    `Desde la fecha: ${date1.toLocaleDateString()} hasta la fecha: ${date2.toLocaleDateString()} han pasado ${Math.abs(
      transform
    )} dias`
  );
}

daysBetween(new Date(1997, 11, 23), new Date(1997, 11, 24));
daysBetween(new Date(2021, 1, 13), new Date(2021, 1, 14));
daysBetween(new Date(2020, 10, 10), new Date(2021, 1, 1));
daysBetween(new Date(2020, 1, 1), new Date(2021, 1, 1));
