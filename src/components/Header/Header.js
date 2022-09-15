import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header classNAme="header">
            <Link to="/"><h1 className="header__title">EquipMe</h1></Link>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <NavLink to="/pros">Pros</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/used">Used</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/signup">Sign up</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="login">Login</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;