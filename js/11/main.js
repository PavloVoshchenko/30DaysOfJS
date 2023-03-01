const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16,
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22,
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25,
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26,
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20,
    }
]

// 1. Iterate through the users array and get all the keys of the object using destructuring
for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age);
  }

// 1. Find the persons who have less than two skills

const usersWithLessThanTwoSkills = users.filter(user => user.skills.length < 2);
console.log(usersWithLessThanTwoSkills);

// 1. Destructure the countries object print name, capital, population and languages of all countries

countries.forEach(({ name, capital, population, languages }) => {
    console.log(`Name: ${name}`);
    console.log(`Capital: ${capital}`);
    console.log(`Population: ${population}`);
    console.log(`Languages: ${languages.join(', ')}`);
    console.log('---');
});

// 1. Write a function called *convertArrayToObject* which can convert the array to a structure object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];

function convertArrayToObject(array) {
    return array.map(([name, skills, scores]) => ({ name, skills, scores }));
  }

  console.log(convertArrayToObject(students));

// console.log(convertArrayToObject(students))
// [
//     {
//         name: 'David',
//         skills: ['HTM', 'CSS', 'JS', 'React'],
//         scores: [98, 85, 90, 95],
//     },
//     {
//         name: 'John',
//         skills: ['HTM', 'CSS', 'JS', 'React'],
//         scores: [85, 80, 85, 80],
//     }
// ]


// 1. Copy the student object to newStudent without mutating the original object. In the new object add the following:

// - Add Bootstrap with level 8 to the front end skill sets
// - Add Express with level 9 to the back end skill sets
// - Add SQL with level 8 to the data base skill sets
// - Add SQL without level to the data science skill sets


const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const newStudent = {
    ...student,
    skills: {
        frontEnd: [
            ...student.skills.frontEnd,
            { skill: 'Bootstrap', level: 8 },
        ],
        backEnd: [
            ...student.skills.backEnd,
            { skill: 'Express', level: 9 },
        ],
        dataBase: [
            ...student.skills.dataBase,
            { skill: 'SQL', level: 8 },
        ],
        dataScience: [
            ...student.skills.dataScience,
            'SQL',
        ],
    },
};

console.log(newStudent);

//   {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML', level: 10},
//         {skill: 'CSS', level: 8},
//         {skill: 'JS', level: 8},
//         {skill: 'React', level: 9},
//         {skill: 'BootStrap', level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node', level: 7},
//         {skill: 'GraphQL', level: 8},
//         {skill: 'Express', level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB', level: 7.5},
//         { skill: 'SQL', level: 8}
//       ],
//       dataScience: ['Python', 'R', 'D3.js', 'SQL']
//     }
//   }