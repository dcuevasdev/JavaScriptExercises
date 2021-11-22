let requestAmount = 1350;

const money = {
  100: 3,
  50: 6,
  20: 10,
  10: 50,
  1: 50,
};

const denomination = Object.keys(money);

const availableMoney = () => {
  const available = denomination.map((value) => value * money[value]);

  const totalMoney = available.reduce((accum, current) => accum + current);

  return totalMoney;
};

if (requestAmount > availableMoney()) {
  console.log("No contamos con el monto solicitado");
} else {
  let count = 0;
  while (requestAmount !== 0) {
    count++;
    const actualDenomination = denomination[denomination.length - count];
    const div = parseInt(requestAmount / actualDenomination);
    const amountDenomination = money[actualDenomination];

    if (div <= amountDenomination && div !== 0) {
      requestAmount = requestAmount - div * actualDenomination;
      console.log(`Recibes ${div} billetes de ${actualDenomination}`);
    } else if (div >= amountDenomination) {
      requestAmount = requestAmount - amountDenomination * actualDenomination;
      console.log(
        `Recibes ${amountDenomination} billetes de ${actualDenomination}`
      );
    }
  }
}
