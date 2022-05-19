console.log("Hello World!");

x = 10; // this is a number

console.log(x + 5);

console.log(x - 5);

console.log(x % 2);

// no keyword infront of the variable name means it's global
fname = "Charles"; // this is a primitive and a string

isTrainer = true; // this is a boolean

nothing = null; // this is a null

isNotQuite = undefined; // this is an undefined primitive (default)

var hi; // pure declaration of a variable in JS always defaults to the primitive of undefined

console.log(hi);

let hello; // let allows for reassignment

const hola = "hola"; // these act like final in java

hello = "hi there";

console.log(hola);
console.log(hello);

// Arrays!!!! HOOORRRAAYYYYYYYYY

const stuff = [10, 20, 30, hola, "hello", true, null, { fname: "Adam" }];

console.log(stuff[7]);

for (let i = 0; i < stuff.length; i++) {
    console.log(stuff[i] + 10); // this interacts weird because of Type Coercion
}

// for of loop - arrays
for (const element of stuff) {
    console.log("Enhanced: " + element);
}

// Type Coercion

console.log("Watch this");
console.log(true + true + true + true + false + 10);
console.log(10 + 1 + "5" + 4); // type coercion to string 1154
// "5" = NaN;// this would result in error

console.log(5 == "5"); // double equals in JS Type Coerces
// STrict equality operator
console.log(NaN === "5"); // extra = means that it will ALSO check the type ANYTHIGN YOU COMPARE USE ===

// FALSY Values (Truthy-Falsy)

const emptyString = ""; // false
const zero = 0; // false
const notAThing = null; // false
const undef = undefined; // false
const notANumber = NaN; // Not a Number is false, also it's of number datatype

const array = []; // truthy
const object = {}; // truthy

if (emptyString) {
    console.log("Yo I'm true");
} else {
    console.log("Im a liar");
}

// Object Literals

const dog = {
    petName: "Atlas",
    breed: "Bernese Mountain Dog",
    age: 2,
    isHappy: true,
};

// Key value pair. can use dot notation or bracket notation
console.log(dog.petName);
console.log(dog.age);
console.log(dog["petName"]);

// Enhanced for in loop - for Object Literals
for (const key in dog) {
    // console.log(dog.key); // this will just say all values are undefined bc there is no key for key
    console.log(key + " " + dog[key]);
}
