// This function is consider a component for React, everything in react is built off components

import Batches from "./components/batches";
import ContactUs from "./components/contact-us";
import Counter from "./components/counter";
import Employee from "./components/employee";
import Intro from "./components/intro";
import TechTrainings from "./components/trainings";

const bryan = { employeeName: "Bryan Serfozo", title: "Newbie Trainer", estSalary: 1 };

// REACT uses a virtual dom, what it does is it renders a virtual and compares to the actual dom
function App() {
    return (
        <div className="App">
            <Intro />
            <ContactUs></ContactUs>
            {/* the string values are the ONLY ones that don't require {, these are pased in as a props object in key-value pairs */}
            <Employee employeeName={"Charlie Jester"} title="God-Tier Trainer" estSalary={10} />
            <Employee employeeName={"Adam Ranieri"} title="Pentultimate Trainer" estSalary={10000000000000} />
            <Employee {...bryan} />
            <TechTrainings tech={["Java", "JavaScript", "Python", "Node/GCP", "PEGA", ".NET"]}></TechTrainings>
            <h1>Lo-Code/No-code</h1>
            <TechTrainings tech={["PEGA", "SNOW", "Saleforces"]} />
            <Counter />
            <Batches />
        </div>
    );
}

export default App;
