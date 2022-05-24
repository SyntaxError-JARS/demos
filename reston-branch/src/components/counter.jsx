import { useState } from "react";

export default function Counter() {
    // Even though the count is changing there is nothing to let react now that it needs to re-render
    // let count = 0;
    // function increase() {
    //     count++;
    //     console.log(count);
    // }

    const [count, setCount] = useState(20);

    function increase() {
        const newValue = count + 1;
        setCount(newValue); // whenever setCount get's called it re-renders the component
    }

    return (
        <>
            <h3>The counter is at {count}</h3>
            <button onClick={increase}>Add to the Counter</button>
        </>
    );
}
