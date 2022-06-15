import { useRef } from "react";

export default function ContactUs() {
    // Hooks in react, they are special functions that almost ALWAYS start with use that "supercharges" your functional components

    const emailInput = useRef();

    function sendEmail() {
        alert(`An email has been sent ${emailInput.current.value}`);
    }

    return (
        // the below empty <> is a React.Fragment
        <>
            <h3>Request an email to contact us</h3>
            <input placeholder="Enter email address" ref={emailInput} />
            <button onClick={sendEmail}>Email ME</button>
        </>
    );
}
