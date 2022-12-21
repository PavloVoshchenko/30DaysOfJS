//Find the person who has many skills in the users object
//Asab has skills HTML, CSS, JavaScript, Redux, MongoDB, Express, React, Node
function userSkill() {
  const keys = Object.keys(users);
  console.log(keys);
  let max = 0;
  let userSkills = [];
  let user;
  for (let i = 0; i < keys.length; i++) {
    if (users[keys[i]].skills.length > max) {
      max = users[keys[i]].skills.length;
      user = keys[i];
      userSkills = users[keys[i]].skills;
    }
  }
  console.log(`${user} has skills ${userSkills}`);
}
userSkill();

//Count logged in users, count users having greater than equal to 50 points from the following object
function counts() {
  const keys = Object.keys(users);
  let logged = 0;
  let points = 0;
  for (let i = 0; i < keys.length; i++) {
    if (users[keys[i]].isLoggedIn === true) {
      logged = ++logged;
    }
    if (users[keys[i]].points >= 50) {
      points = ++points;
    }
  }
  console.log(`The number of logged in users - ${logged}`);
  console.log(`The number of users with greater than or equal to 50 points -  ${points}`);

}
counts();

//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome,
//totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. 
//Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
console.log(personAccount);
personAccount.addIncome(1000);
personAccount.addExpense(10);
console.log('Account - ' + personAccount.accountInfo());
console.log('Account Income - ' + personAccount.totalIncome());
console.log('Account Expense - ' + personAccount.totalExpense());
console.log('Account balance - ' + personAccount.accountBalance());
