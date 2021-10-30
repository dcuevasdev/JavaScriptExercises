/*
Horas a segundos
Queremos que la función hoursToSeconds devuelva el valor de hours en segundos
*/

function hoursToSeconds(hours) {
  const hour = hours;

  const calc = hour * 3600;

  console.log(`${hour} horas tiene ${calc} segundos`);
}

hoursToSeconds(16);
