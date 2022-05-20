function hoistAway() {
    console.log(hello); // this will return undefined because of JS two pass sytem

    var bye; // by default, this is undefined
    var hello = "Hello there";

    console.log(hello); // will now print out the value as initialized above
}

hoistAway();
// hoistLet();

hoistConst(); // you wouldn't usually do this

function hoistLet() {
    let greeting = "Greetings and stuffs";
    console.log(greeting);
}

function hoistConst() {
    const greeting = "Greetings and stuffs";
    console.log(greeting);
}

hoistLet();
