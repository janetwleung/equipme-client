import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import CTA from "../CTA/CTA";

function Header() {


    return (
        <>
            {/* Mobile Navigation HTML */}
            <header className="mobile-header">
                <div className="mobile-header__content">
                    <nav className="mobile-header__navigation" role="navigation">
                        <div className="mobile-header__menu-toggle" id="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul className="mobile-header__list" id="menu">
                                <li className="mobile-header__list-item">
                                    <NavLink to="/what-the-pros-wear" className="mobile-header__list-item-link">What The Pros Wear</NavLink>
                                </li>
                                <li className="mobile-header__list-item">
                                    <NavLink to="/used" className="mobile-header__list-item-link">Shop Used</NavLink>
                                </li>
                                <li className="mobile-header__list-item">
                                    <CTA isButton={false} text="Login" type="secondary" link="/login" />
                                </li>
                                <li className="mobile-header__list-item">
                                    <CTA isButton={false} text="Sign Up" link="/signup" />
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className="header__title-link"><h1 className="mobile-header__title">EquipMe.</h1></Link>
                    </nav>
                </div>
            </header>
            {/* Tablet / Desktop Navigation HTML */}
            <header className="header">
                <div className="header__container">
                    <Link to="/" className="header__title-link"><h1 className="header__title">EquipMe.</h1></Link>
                    <ul className="header__nav">
                        <li className="header__nav-item">
                            <NavLink
                                to="/what-the-pros-wear"
                                className={({ isActive }) =>
                                    "header__nav-item-link" + (isActive ? " header__nav-item-link--active" : "")}
                            >
                                What The Pros Wear
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="#"
                                className="header__nav-item-link"
                                // className={({ isActive }) =>
                                //     "header__nav-item-link" + (isActive ? " header__nav-item-link--active" : "")}
                            >
                                Shop Used
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <CTA 
                                isButton={false} 
                                text="Sign Up"
                                // link="/signup" 
                                link="#" />
                        </li>
                        <li className="header__nav-item">
                            <CTA 
                                isButton={false} 
                                text="Login" 
                                type="secondary" 
                                // link="/login" 
                                link="#"
                            />
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;