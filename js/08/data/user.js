const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [3000],
  costs: [1700, 200],

  arraySum: function (arr) {
    return arr
      .toString().split(',')
      .map(el => +el)
      .reduce((acc, cur) => acc + cur);
  },
  accountInfo: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  totalIncome: function () {
    return this.arraySum(this.incomes);
  },
  totalExpense: function () {
    return this.arraySum(this.costs);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
  addIncome: function (income) {
    return this.incomes.push(income);
  },
  addExpense: function (cost) {
    return this.costs.push(cost);
  },
}

