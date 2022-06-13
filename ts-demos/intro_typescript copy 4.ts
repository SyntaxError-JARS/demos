// what's happening here? Type coercion
// let y = ""
// if (y === 0) {
//     console.log("Well that's odd.");
// }
// let x = 10;
// if (1 < x < 3) {
//     console.log("This is inbetween 1 and 3, or is it?");
// }

var obj = { username: "cjester", age: 29 };

console.log(obj.username, obj.age);

// console.log(4 / []);

const hello = "Hello world";

console.log(hello);

const helloAgain: string = "Hello yet again";

// with ts can no longer reassign an object literals value to a different datatype
// obj.username = 10

interface User {
    username: string;
    age: number;
    happiness: number;
    levelOfDone: number;
    isSleepy: boolean;
}

// const user2: User = {
//     username: "Robb",
//     age: 21,
// };

const isRunning: boolean = true;

// console.log(user2.username, user2.age);

function myNewFunction(): string {
    // return 10; not okay, it's return is now a string
    return "Well isn't that neet.";
}

console.log(myNewFunction());

function findMyUser(): User {
    const obj: User = {
        username: "jester",
        age: 29,
        happiness: 100,
        levelOfDone: 0,
        isSleepy: true,
    };
    return obj;
}
