import React from "react";

// set up functions to take in props, this takes some information in to then display beelow
export default function Employee(props) {
    // const employeeName = props.employeeName;
    // const title = props.title;
    // const estSalary = props.estSalary;

    // obj destructuring to quickly and cleanly assign the variables from their keys in the props object
    const { employeeName, title, estSalary } = props;

    return (
        <React.Fragment>
            {/* The above React.Fragment allows you to return under a single parent tag that isn't impacted by the html structure and styling */}
            <h3>Name: {employeeName}</h3>
            <h5>Title: {title}</h5>
            <h5>Salary: {estSalary}</h5>
        </React.Fragment>
    );
}
