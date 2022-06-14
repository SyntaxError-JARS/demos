import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/home">
                <button>Home</button>
            </Link>
            <Link to="/budget">
                <button>Budget</button>
            </Link>
            <Link to="/list">
                <button>List</button>
            </Link>
            <Link to="/form">
                <button>Form</button>
            </Link>
        </nav>
    );
}
