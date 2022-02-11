import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <ul>
                <Link to="/">
                    <li>Item</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
