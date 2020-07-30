const departments = {
  rus: {
    text: `Россия`,
    locations: [
      {city: `Moscow`, geometry: [55.7577299, 37.5886205]},
      {city: `Saint Petersburg`, geometry: [59.9375, 30.308611]},
      {city: `Saratov`, geometry: [51.533333, 46.016667]},
      {city: `Kirov`, geometry: [58.6, 49.683333]},
      {city: `Tyumen`, geometry: [57.15, 65.533333]},
      {city: `Omsk`, geometry: [54.983333, 73.366667]},
    ],
  },
  cis: {
    text: `СНГ`,
    locations: [
      {city: `Baku`, geometry: [40.395278, 49.882222]},
      {city: `Tashkent`, geometry: [41.3, 69.266667]},
      {city: `Almaty`, geometry: [43.2775, 76.895833]},
      {city: `Minsk`, geometry: [53.9, 27.566667]},
    ],
  },
  eu: {
    text: `Европа`,
    locations: [
      {city: `Paris`, geometry: [48.856613, 2.352222]},
      {city: `Prague`, geometry: [50.083333, 14.416667]},
      {city: `London`, geometry: [51.507222, -0.1275]},
      {city: `Rome`, geometry: [41.883333, 12.5]},
    ],
  },
};

export default departments;
