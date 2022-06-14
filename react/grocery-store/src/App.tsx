import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroceryBudget from "./components/budget";
import GroceryForm from "./components/grocery-form";
import GroceryList from "./components/grocery-list";
import NavBar from "./components/navbar";
import { store } from "./store";

function App() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <NavBar></NavBar>
                    <Routes>
                        <Route path="home" element={<h1>Welcome to React with TypeScript</h1>}></Route>
                        <Route path="budget" element={<GroceryBudget />}></Route>
                        <Route path="list" element={<GroceryList />}></Route>
                        <Route path="form" element={<GroceryForm />}></Route>
                    </Routes>
                </Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
