const motherSum = 470000;

const submitableFields = [
  `purpose`,
  `price`,
  `firstPay`,
  `checkboxes`,
  `period`,
];

const creditTypes = [
  {
    title: `Ипотечное кредитование`,

    purpose: `Ипотека`,
    sumTitle: `Сумма ипотеки`,
    priceTitle: `Стоимость недвижимости`,
    errorTitle: `ипотечные кредиты`,

    price: {
      min: 1200000,
      max: 25000000,
      step: 100000,
    },

    firstPay: {
      minPercentage: 10,
    },

    period: {
      min: 5,
      max: 30,
    },

    minCredit: 500000,

    checkboxes: [{name: `mother`, title: `Использовать материнский капитал`}],

    getCredit({price, firstPay, checkboxes: {mother}}) {
      return price - firstPay - (mother ? motherSum : 0);
    },

    getInterestRate({firstPay, price}) {
      return firstPay / price < 0.15 ? 0.094 : 0.085;
    },
  },
  {
    title: `Автомобильное кредитование`,
    purpose: `Автокредит`,
    sumTitle: `Сумма автокредита`,
    priceTitle: `Стоимость автомобиля`,
    errorTitle: `автокредиты`,

    price: {
      min: 500000,
      max: 5000000,
      step: 50000,
    },

    firstPay: {
      minPercentage: 20,
    },

    period: {
      min: 1,
      max: 5,
    },

    minCredit: 200000,

    checkboxes: [
      {name: `casco`, title: `Оформить КАСКО в нашем банке`},
      {name: `insurance`, title: `Оформить Страхование жизни в нашем банке`},
    ],

    getCredit({price, firstPay}) {
      return price - firstPay;
    },

    getInterestRate({price, checkboxes: {insurance, casco}}) {
      if (insurance && casco) {
        return 0.035;
      }

      if (insurance || casco) {
        return 0.085;
      }

      return price < 2000000 ? 0.16 : 0.15;
    },
  },
  {
    title: `Потребительский кредит`,
    purpose: `Потребительский кредит`,
    sumTitle: `Сумма кредита`,
    priceTitle: `Сумма потребительского кредита`,
    errorTitle: `потребительские кредиты`,

    price: {
      min: 50000,
      max: 3000000,
      step: 50000,
    },

    period: {
      min: 1,
      max: 7,
    },

    minCredit: 50000,

    checkboxes: [
      {
        name: `participant`,
        title: `Участник зарплатного проекта нашего банка`,
      },
    ],

    getCredit({price}) {
      return price;
    },

    getInterestRate({price, checkboxes: {participant}}) {
      return getRate(price) - (participant ? 0.005 : 0);

      function getRate(p) {
        if (p < 750000) {
          return 0.15;
        }

        if (p < 2000000) {
          return 0.125;
        }

        return 0.095;
      }
    },
  },
];

creditTypes.forEach((el, i) => {
  el.id = i;

  if (el.firstPay) {
    el.firstPay.getMax = function getMax({price, checkboxes: {mother}}) {
      return price - el.minCredit - (mother ? motherSum : 0);
    };
  }
  el.price.validate = function validate(val) {
    return val >= this.min && val <= this.max;
  };
  el.period.validate = el.price.validate;
});

export {submitableFields};

export default creditTypes;
