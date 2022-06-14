import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import { Key, ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { useSelector } from "react-redux";
import GroceryForm from "./grocery-form";

export default function GroceryList() {
    const items = useSelector((state: any) => state.items);
    const groceryList = items.map((i: any) => <li key={i}>{i}</li>);

    return (
        <>
            <h1>Grocery List Coming Soon!</h1>
            <GroceryForm></GroceryForm>
            <ul>{groceryList}</ul>
        </>
    );
}
