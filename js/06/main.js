//Using the countries array, create an array for countries length'
const newArr = [];

for (let i = 0; i < countriesArray.length; i++) {
    newArr.push(countriesArray[i].length);
}
console.log(newArr);

//Using the countries array, find the country containing only 5 characters
const fiveCharactersArr = [];

for (let i = 0; i < countriesArray.length; i++) {
    if(countriesArray[i].length == 5)
     fiveCharactersArr.push(countriesArray[i]);
}
console.log(fiveCharactersArr);

//Find the longest word in the webTechs array
let max = webTechs[0];
for (let i = 1; i < webTechs.length; ++i) {
    if (webTechs[i].length > max.length) {
        max = webTechs[i];
    }
}
console.log(max);

//Use the webTechs array to create the following array of arrays
const newArrs = [];
for (let i = 0; i < webTechs.length; i++) {
    newArrs.push([webTechs[i], webTechs.length]);
}
console.log(newArrs);

/*
Sort the webTechs array
For the following tasks use countries array from 06_Day_Loops/06_day_starter/data/countries.js file
*/

//Find the country containing the hightest number of characters in the countries array
let country = countries[0];
let maxLenght = 0;
for (let i = 1; i < countries.length; ++i) {
    if (countries[i].length > maxLenght) {
        maxLenght = countries[i];
    }
}
console.log(max);

//Extract all the countries contain the word 'land' from the countries array and print it as array
let landArr = [];
for (const country of countries) {
    if (country.includes('land'))
        landArr.push(country)
}
console.log(landArr);
//Extract all the countries containing two or more words from the countries array and print it as array
let twoWordsArr = [];
for (const country of countries) {
    if (country.includes(' '))
        twoWordsArr.push(country)
}
console.log(twoWordsArr);

//Reverse the countries array and capitalize each country and stored it as an array */

let reverseArr = [];
for (const countrie of countries) {
    reverseArr.push(countrie.toUpperCase());
}
reverseArr = reverseArr.reverse();
console.log(reverseArr);


