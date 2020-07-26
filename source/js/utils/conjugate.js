const rubles = [`рубль`, `рубля`, `рублей`];
const years = [`год`, `года`, `лет`];

function conjugate(number, titles) {
  const num = Number(number);
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    num % 100 > 4 && num % 100 < 20
      ? 2
      : cases[num % 10 < 5 ? num % 10 : 5]
  ];
}

export {rubles, years};

export default conjugate;
