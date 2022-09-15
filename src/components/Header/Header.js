import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import CTA from "../CTA/CTA";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__title-link"><h1 className="header__title">EquipMe</h1></Link>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <NavLink to="/pros" className="header__nav-item-link">Pros</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/used" className="header__nav-item-link">Used</NavLink>
                </li>
                <li className="header__nav-item">
                    <CTA isButton={false} text="Sign Up"/>
                </li>
                <li className="header__nav-item">
                    <CTA isButton={false} text="Login" type="secondary"/>
                </li>
            </ul>

        </header>
    );
}

export default Header;


{/* <ul className="header__nav">
                <li className="header__nav-item">
                    <NavLink to="/pros" className="header__nav-item-link">Pros</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/used" className="header__nav-item-link">Used</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/signup" className="header__nav-item-link">Sign up</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="login" className="header__nav-item-link">Login</NavLink>
                </li>
            </ul> */}