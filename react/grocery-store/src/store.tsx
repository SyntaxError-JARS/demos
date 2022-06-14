import { configureStore, createSlice } from "@reduxjs/toolkit";

interface InitialState {
    budget: number;
    items: Array<string>;
}

// Creating an initial state of our application
const initialState: InitialState = {
    budget: 100,
    items: ["Eggs", "Milk", "Bread"],
};

// Creating all of the functionality for the store to update the state
const grocerySlice = createSlice({
    name: "grocery",
    initialState,
    reducers: {
        increaseBudget(state, action) {
            const amount: number = Number(action.payload);
            state.budget += amount;
        },
        decreaseBudget(state, action) {
            state.budget -= action.payload;
        },
        addItem(state, action) {
            state.items.push(action.payload);
        },
    },
});

export const store = configureStore({ reducer: grocerySlice.reducer });
export const actions = grocerySlice.actions;
