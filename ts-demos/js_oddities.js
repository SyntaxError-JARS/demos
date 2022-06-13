// what's happening here? Type coercion
if ("" == 0) {
    console.log("Well that's odd.");
}
let x = 10;
if (1 < x < 3) {
    console.log("This is inbetween 1 and 3, or is it?");
}

const obj = { username: "cjester", age: 29 };

console.log(obj.username, obj.aeg);

console.log(4 / []);

obj.username = 10;
