import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function GroceryBudget() {
    const budget = useSelector((state: any) => state.budget);
    const dispatch = useDispatch();
    const amountInput = useRef() as React.MutableRefObject<HTMLInputElement>;

    const amount = Number(amountInput.current?.value);

    function increase() {
        const action = { type: "grocery/increaseBudget", payload: amount };
        dispatch(action);
    }

    function decrease() {
        const action = { type: "grocery/decreaseBudget", payload: amount };
        dispatch(action);
    }

    return (
        <>
            <h1>Grocery Budget Coming Soon!</h1>
            <h3>Budget {budget}</h3>
            <input placeholder="Enter Amount to deposit or withdrawal" ref={amountInput}></input>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </>
    );
}
