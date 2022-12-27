//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object
function showDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
}

showDateTime();

//Declare a function name swapValues. This function swaps value of x to y (without using extra variables)
function swapValues(x, y) {
    return  [x, y] = [y, x];
}

console.log(swapValues(3, 4));
console.log(swapValues(4, 5));

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method)
function reverseArray(array) {
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i])
    }
    return reverseArray;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C'])); // ['C', 'B', 'A']

//Write a function which takes any number of arguments and return the sum of the arguments
const sum = (...args) => {
    let sum = 0;
    for (const element of args) {
        sum += element;
    }
    return sum;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}
const numbers = [1, 2, 3, 4, 5];
console.log(shuffleArray(numbers));

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log('n!=', factorial(5));

//Write a functions which checks if all items are unique in the array
function testUniqueSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i])
            return 'All items are not unique';
    }
    return 'All items are unique';
}
const arr = [1, 2, 3, 5, 5];
console.log(testUniqueSort(arr));
const arr2 = [1, 2, 3, 4, 5];
console.log(testUniqueSort(arr2));

//Write a function which checks if all the items of the array are the same data type
function dataType(arr) {
    let type = typeof arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== type) {
            return 'All the items of the array are not the same data type'
        }
    }
    return 'All the items of the array are the same data type';
}
const type1 = [1, 2, 3, 5, "a"];
console.log(dataType(type1));

const type2 = [1, 2, 3, 5, 6];
console.log(dataType(type2));