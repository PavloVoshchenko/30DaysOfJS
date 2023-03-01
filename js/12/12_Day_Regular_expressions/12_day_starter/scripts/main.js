// 1. Calculate the total annual income of the person from the following text. 
function totalIncome() {
    const text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`
    const numbers = text.match(/\d+/g).map(string => parseInt(string))
    let result = numbers.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    return result;
}
console.log(totalIncome());
// 1. Write a pattern which identify if a string is a valid JavaScript variable
function isValidVariable(str) {
    const pattern = /^[a-z_][a-z_$]*$/;
    const result = pattern.test(str);
    return result;
}
console.log(isValidVariable('first_name')); // true
console.log(isValidVariable('first-name')); // false
console.log(isValidVariable('1first_name')); // false
console.log(isValidVariable('firstname')); // true

// 1. Write a function called *tenMostFrequentWords* which get the ten most frequent word from a string:

const paragraph = `I love teaching. If you do not love teaching what else can 
    you love. I love Python if you do not love something which can give you all the 
    capabilities to develop an application what else can you love.`;
function tenMostFrequentWords(words) {
    const wordsArray = words.split(/[^a-zA-Z]+/).filter(word => word.length > 0);

    const frequencies = wordsArray.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    const sortedWords = Object.keys(frequencies)
        .sort((a, b) => frequencies[b] - frequencies[a])
        .slice(0, 10)
        .map(word => ({ word, count: frequencies[word] }));

    return sortedWords;
}
console.log(tenMostFrequentWords(paragraph));


//     [
//       {word:'love', count:6},
//       {word:'you', count:5},
//       {word:'can', count:3},
//       {word:'what', count:2},
//       {word:'teaching', count:2},
//       {word:'not', count:2},
//       {word:'else', count:2},
//       {word:'do', count:2},
//       {word:'I', count:2},
//       {word:'which', count:1}
//     ]

// 1. Write a function which cleans text. After cleaning, count three most frequent words in the string.


const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
    const reg = /[^ \w]/gi;
    const words = sentence.toLowerCase().replace(reg, '').split(" ");
    const frequencies = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});


    const sortedWords = Object.keys(frequencies)
        .sort((a, b) => frequencies[b] - frequencies[a])
        .slice(0, 3)
        .map(word => ({ word, count: frequencies[word] }));

    return sortedWords;
}
console.log(cleanText(sentence));



//       [
//         { word: 'i', count: 3 },
//         { word: 'a', count: 2 },
//         { word: 'and', count: 2 }
//       ]
