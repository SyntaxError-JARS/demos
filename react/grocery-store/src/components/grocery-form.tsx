import { MutableRefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store";

export default function GroceryForm() {
    const itemInput = useRef() as React.MutableRefObject<HTMLInputElement>;
    const dispatch = useDispatch();

    function addItem() {
        const item = itemInput.current.value;
        // type looks at what reducer the action is calling, in our case it's the grocery slice's addItem reducer function
        //const action = { type: "grocery/addItem", payload: item };
        const action = actions.addItem(item);
        dispatch(action);
    }

    return (
        <>
            <h1>Grocery Form Coming Soon!</h1>
            <input placeholder="Enter Grocery Item" ref={itemInput}></input>
            <button onClick={addItem}>Add To List</button>
        </>
    );
}
