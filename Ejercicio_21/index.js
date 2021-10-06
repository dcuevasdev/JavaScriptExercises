function listRandomNumber() {
  const listNumbers = [];
  let sizelistNumbers = 0;

  while (sizelistNumbers < 100) {
    const random = Math.floor(Math.random() * 1000);

    const confirmNumber = listNumbers.some((number) => {
      return number === random;
    });

    if (confirmNumber) {
    } else {
      listNumbers.push(random);
    }

    sizelistNumbers = listNumbers.length;
  }
  console.log(listNumbers);
}

listRandomNumber();
