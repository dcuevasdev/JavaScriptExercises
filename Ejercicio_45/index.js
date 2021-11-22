let requestAmount = 230;

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
}
