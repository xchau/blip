let index = 0;

const data = [
  // { key: index++, section: true, label: 'North America' },
  { key: index++, label: 'Canada'},
  { key: index++, label: 'Guatemala'},
  { key: index++, label: 'Jamaica'},
  { key: index++, label: 'Mexico'},
  { key: index++, label: 'United States'},
  // { key: index++, section: true, label: 'South America' },
  { key: index++, label: 'Argentina'},
  { key: index++, label: 'Bolivia'},
  { key: index++, label: 'Brazil'},
  { key: index++, label: 'Chile'},
  { key: index++, label: 'Venezuela'},
  // { key: index++, section: true, label: 'Africa' },
  { key: index++, label: 'Cameroon'},
  { key: index++, label: 'Republic of the Congo'},
  { key: index++, label: 'Egypt'},
  { key: index++, label: 'Ghana'},
  { key: index++, label: 'South Africa'},
  // { key: index++, section: true, label: 'Asia' },
  { key: index++, label: 'Australia'},
  { key: index++, label: 'China'},
  { key: index++, label: 'Japan'},
  { key: index++, label: 'South Korea'},
  { key: index++, label: 'Saudi Arabia'},
  { key: index++, label: 'Turkey'},
  // { key: index++, section: true, label: 'Europe' },
  { key: index++, label: 'Austria'},
  { key: index++, label: 'England'},
  { key: index++, label: 'Finland'},
  { key: index++, label: 'Germany'},
  { key: index++, label: 'Ukraine'},
];

const countries = data.sort((a, b) => {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }

  return 0;
});

module.exports = countries;
