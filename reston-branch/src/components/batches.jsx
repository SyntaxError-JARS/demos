import { useState, useRef } from "react"; // NOTE import syntax is important

export default function Batches() {
    const batchInput = useRef();
    // in the [read-only,function to update the state and force a re-render]
    const [batches, setBatches] = useState(["JavaReactAzure", "PEGA"]);

    // we don't want to leave hardcorded information
    //const batchList = ["JavaReactAzure", "PEGA"]; // good idea to hardcode things first

    //
    const batchListItems = batches.map((e) => <li key={e}>{e}</li>);

    function addBatch() {
        const batch = batchInput.current.value;
        const newBatchList = [...batches, batch];
        setBatches(newBatchList);
    }

    return (
        <>
            <br></br>
            <input placeholder="Enter batch name" ref={batchInput} />
            <button onClick={addBatch}>Add Batch</button>
            {/* {batches.length === 0 ? (
                <></>
            ) : (
                <>
                    <h3>Current Available Batches @ Reston Revature</h3>
                    <ul>{batchListItems}</ul>
                </>
            )} */}
            {/* Guard with || allows when the value is false to then be default to the following statements */}
            {batches.length === 0 || (
                <>
                    <h3>Current Available Batches @ Reston Revature</h3>
                    <ul>{batchListItems}</ul>
                </>
            )}
        </>
    );
}
