/*
Piedra, Papel, o Tijera
Queremos que de acuerdo al input de dos jugadores(p1, p2), determinar el ganador del pidra papel o tijera. Si gana el jugador 1, retornamos 1. Si gana el jugador 2 retornamos 2. Si es un empate retornamos 0. Valores posibles: piedra, papel, o tijera
*/

function rps(p1, p2) {
  const game = ["piedra", "papel", "tijera"];
  const playerOne = p1;
  const playerTwo = p2;
  const positionOne = game.indexOf(playerOne);
  const positionTwo = game.indexOf(playerTwo);

  switch (true) {
    case (positionOne === 0 && positionTwo === 2) ||
      (positionOne === 1 && positionTwo === 0) ||
      (positionOne === 2 && positionTwo === 1):
      console.log("El jugador uno es el ganador");
      break;
    case (positionOne === 2 && positionTwo === 0) ||
      (positionOne === 0 && positionTwo === 1) ||
      (positionOne === 1 && positionTwo === 2):
      console.log("El jugador dos es el ganador");
      break;
    default:
      console.log("Es un empate");
      break;
  }
}

rps("tijera", "piedra");
