const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
  .map(product => parseFloat(product.price))
  .filter(price => !isNaN(price))
  .reduce((total, price) => total + price, 0);

console.log(totalPrice);

//Find the sum of price of products using only reduce reduce(callback))
const totalPrice2 = products.reduce((total, product) => {
  const price = parseFloat(product.price);
  if (!isNaN(price)) {
    return total + price;
  } else {
    return total;
  }
}, 0);

console.log(totalPrice2);

//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(arr, n) {
  return arr.slice(0, n);
}

console.log(getFirstTenCountries(countries, 10));

//Declare a getLastTenCountries function which returns the last ten countries in the countries array
function getLastTenCountries(arr) {
  return arr.slice(-10);
}

console.log(getLastTenCountries(countries));

//Use the countries information, in the data folder. Sort countries by name, by capital, by population
function sortedByName() {
  const byName = countries.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
  console.log(byName);
}

function sortedByCapital() {
  const byCapital = countries.sort((a, b) => {
    if (a.capital < b.capital) return -1;
    if (a.capital > b.capital) return 1;
    return 0;
  })
  console.log(byCapital);
}

function sortedByPopulation() {
  const byPopulation = countries.sort((a, b) => {
    if (a.population < b.population) return -1;
    if (a.population > b.population) return 1;
    return 0;
  })
  console.log(byPopulation);
}

sortedByName();
sortedByCapital();
sortedByPopulation();

//Find the 10 most spoken languages:
const languages = countries.flatMap(country => country.languages);

const languageCounts = languages.reduce((acc, language) => {
  if (!acc[language]) {
    acc[language] = 0;
  }
  acc[language]++;
  return acc;
}, {});

const languageArr = Object.keys(languageCounts)
  .map(lang => ({ language: lang, count: languageCounts[lang] }));
  
const topTenLanguages = languageArr.sort((a, b) => b.count - a.count).slice(0, 10);

console.log(topTenLanguages);