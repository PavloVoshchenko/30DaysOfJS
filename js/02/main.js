//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str = 'You cannot end a sentence with because because because is a conjunction';
let substr = 'because because because ';
console.log(str);
console.log(str.replace(substr, ''));

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let str2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let pattern = /love/gi;
console.log(str2);
console.log(str2.match(pattern).length);

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str3 = 'You cannot end a sentence with because because because is a conjunction';
let pattern3 = /because/gi;
console.log(str3);
console.log(str3.match(pattern3).length);

//Calculate the total annual income of the person by extracting the numbers from the following text.
//'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let str4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let regEx = /\d+/g;
console.log(str4.match(regEx).reduce((a, b) => +a + +b));

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let reg = /[^ \w]/gi;
let words = sentence.replace(reg, '');
let regIWord = /\I/g;

console.log(`Word ${'I'} has ${words.match(regIWord).length} occurrences.`);