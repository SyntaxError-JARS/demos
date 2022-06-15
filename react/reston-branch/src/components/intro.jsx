// JSX - or JavaScript XML, is an extension language that combines html/css/js

// Function component
// NOTEEEE the function name MUST start with a captial

export default function Intro() {
    /*
    return a JSX element
    this is all intertwined when we create our webpage, so let's add some js
    */

    const location = "Reston VA, 19047";

    return (
        <div>
            <h1>Welcome to the {location}</h1>
            <p>Badabing, we be the coolest</p>
        </div>
    );
}
