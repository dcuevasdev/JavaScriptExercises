/*Calculadora básica
Queremos que la función basicCalculator, recibiendo: un número, un operador ('+', '-', '*', '/'), y otro número, resuelva la cuenta ingresada
*/

function basicCalculator(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      let plus = firstNumber + secondNumber;
      console.log(`La suma de los dos números es: ${plus}`);
      break;
    case "-":
      let subs = firstNumber - secondNumber;
      console.log(`La resta de los dos números es: ${subs}`);
      break;
    case "*":
      let mult = firstNumber * secondNumber;
      console.log(`La multiplicacion de los dos números es: ${mult}`);
      break;
    case "/":
      let div = firstNumber / secondNumber;
      console.log(`La division de los dos números es: ${div}`);
      break;
    default:
      console.log("La operación que deseas realizar no es posible");
      break;
  }
}

basicCalculator(10, "*", 5);
