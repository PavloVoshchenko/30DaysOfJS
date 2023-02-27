const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countr = ['Finland', 'Sweden', 'Norway'];

//Find a union b
let c = [...a, ...b];

let unionSet = new Set(c);

console.log(unionSet);

//Find a intersection b

let A = new Set(a);
let B = new Set(b);

let intersection = a.filter((num) => B.has(num));
let intersectionSet = new Set(intersection);

console.log(intersectionSet);


//Find a with b

let newA = new Set(a);
let newB = new Set(b);

let difference = a.filter((num) => !B.has(num));
let differenceSet = new Set(difference);

console.log(differenceSet);

//How many languages are there in the countries object file

let allLanguages = [];
countries.forEach(country => {
    allLanguages = allLanguages.concat(country.languages);
  });
const uniqueLanguages = new Set(allLanguages);
const countUniqueLanguages = uniqueLanguages.size;

console.log(countUniqueLanguages);