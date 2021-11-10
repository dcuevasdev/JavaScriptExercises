/*
Ordenar oración
Se recibirá una oración, donde cada palabra de la oracion puede contener un número del 1 al 9 dentro de la palabra. El objetivo es ordenar cada palabra de acuerdo al número que cada una contiene: `mun2do ho1la` -> `hola mundo`
*/

function orderSentence(sentence) {
  const dataUser = sentence;
  const dataArray = dataUser.split(" ");

  const orderedArray = [];

  for (let i = 1; i < 10; i++) {
    dataArray.find((element) => {
      const validator = element.includes(i);

      if (validator) {
        const findPosition = element.indexOf(String(i));
        const numberPosition = Number(findPosition);
        const cut =
          element.slice(0, numberPosition) +
          element.slice(numberPosition + 1, element.length);

        orderedArray.push(cut);
      }
    });
  }

  console.log(orderedArray.join(" "));
}

orderSentence(" co8dicion 2lo  dentro5 Tod1o d6e e4ste   de9be qu3e la7");
