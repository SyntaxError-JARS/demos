// Destructuring

// Array

const people = ["Adam", "Charles", "Mehrab", "Wezley", "Bryan"];

console.log(test); // this was hoisted to the top and created in memory by default, aka undefined

var test = 0; // this is an example of hoisting

const adamP = people[0];
const charlesP = people[2];

console.log(adamP, charlesP);

// Array Destructuring

const [adam, charles, mehrab, wezley, bryan] = people;
// const [adamD, charlesD, mehrab, wezley, bryan] = ["Adam", "Charles", "Mehrab", "Wezley", "Bryan"];

console.log(adam, charles, mehrab, wezley, bryan);

// Object

const user = { username: "JesterCharles", fname: "Charles", lname: "Jester", age: 28 };

const usernameO = user.username;
const fnameO = user["fname"];

console.log("-------Object Destructuring Example----------");
console.log(usernameO, fnameO);

// const { usernameO, fnameO, lname, age } = user; // keys don't match, will result in undefined
const { username, fname, lname, age } = user; // use the keys as the variable names
//const { username, fname, lname, age } = { username: "JesterCharles", fname: "Charles", lname: "Jester", age: 28 };

console.log("Object Destructured ", username, fname, lname, age);

// Spread Operator

// ...,
console.log("-----Spread Operator Array--------");
const nums = [10, 20, 30, 40, 50];

console.log(nums);

nums.push(60);
nums.push(70);
nums.push(80);
nums.push(90);

console.log(nums);

const cloneNums = [...nums, 60, 70, 80, 90];

console.log("This is the cloned array ", cloneNums);

console.log("-----Spread Operator Object--------");

const bankAccount = { id: 101, owner: "Charles Jester", amount: 10 };

console.log(bankAccount);

bankAccount.owner = "Maxwell House";
bankAccount.amount = 100;
bankAccount.openDate = "11 - 11 - 2011";

console.log(bankAccount);

const clonedBankAccount = {
    ...bankAccount,
    amount: 1500,
    accountType: "checking",
    isActive: true,
    livingOnRamen: true,
};

console.log(clonedBankAccount);
