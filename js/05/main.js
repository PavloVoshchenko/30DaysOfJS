// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.split(' ');
console.log(words);
console.log(words.length);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list and print the array.
let ethiopia = 'Ethiopia';
if (countries.includes(ethiopia)) {
    let index = countries.indexOf(ethiopia);
    countries[index] = 'ETHIOPIA';
} else
    countries.push(ethiopia);
console.log(countries);

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let sass = 'Sass';
webTechs.includes(sass) != false ? console.log('Sass is a CSS preprocess') : webTechs.push(sass); console.log(webTechs);

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//The following is an array of 10 students ages.

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortedArr = ages.sort();
let length = sortedArr.length;
let min = sortedArr[0];
let max = sortedArr[sortedArr.length - 1];
//Sort the array and find the min and max age
console.log(`min = ${min} max = ${max}`);
//Find the median age(one middle item or two middle items divided by two)
console.log(`median = ${sortedArr[Math.round((sortedArr.length - 1) / 2)]}`);
//Find the average age(all items divided by number of items)
let sum = 0;
for (var i = 0; i < length; i++) {
    sum += sortedArr[i];
}
let average = Math.round(sum / length);
console.log(`average = ${average}`);
//Find the range of the ages(max minus min)
console.log(max - min);
//Compare the value of (min - average) and (max - average), use *Math.abs()* method
console.log(Math.abs(min - average) - Math.abs(max - average));