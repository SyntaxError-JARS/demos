console.log("Functional programming is awesome!!!!");

// option 1 of writing a function

function fun() {
    console.log("hello");
}

fun();

// option declare function name, specify function and it's statements

const fun1 = function () {
    console.log("Hello from anotther function");
};

// Arrow notation

const funArrow = (arrow) => {
    console.log(arrow);
};

funArrow({ petname: "Atlas" });

const add = (a, b) => {
    console.log(a + b);
};

add(1, 2);

const dog = {
    petname: "Atlas",
    isHappy: null,
    isGood: undefined, // not every language has undefined, so it will not pass this with the stringify
    isHungry: true,
    bark() {
        // not every language has function, so it will not pass this with the stringify
        console.log("BORK BORK");
    },
};

dog.bark();

const json = JSON.stringify(dog); // convert JS object to JSON

console.log(json);

const jsonBackToDoggo = JSON.parse(json); // convert JSON to JS object

console.log(jsonBackToDoggo);

// Fun with functional programming

let array = [1, 2, 3, 4, 5];

array.push(6); // adds new element to an array

for (const element of array) {
    console.log(element);
}

array.pop(); // both remove and return the value of the element removed
array.pop();
array.pop();

// for (const element of array) {
//     console.log(element);
// }

// array.map() returns a temporary array
array.map((element) => {
    console.log(element + 10);
}); // element could be named anything

for (const element of array) {
    console.log(element);
}

// Reassigning array to the newly mapped array
array = array.map((element) => {
    return element + 10;
});

for (const element of array) {
    console.log(element);
}
