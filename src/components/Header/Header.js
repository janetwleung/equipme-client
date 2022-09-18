import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import CTA from "../CTA/CTA";

function Header() {


    return (
        <>
            <header className="mobile-header">
                <div className="mobile-header__content">
                    <nav className="mobile-header__navigation" role="navigation">
                        <div className="mobile-header__menu-toggle" id="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul className="mobile-header__list" id="menu">
                                <li className="mobile-header__list-item">What The Pros Wear</li>
                                <li className="mobile-header__list-item">Shop Used</li>
                                <li className="mobile-header__list-item">Login</li>
                                <li className="mobile-header__list-item">Sign Up</li>
                            </ul>
                        </div>
                        <h1 className="mobile-header__title">EquipMe.</h1>
                    </nav>
                </div>
            </header>
            
            <header className="header">
                <div className="header__container">
                    <Link to="/" className="header__title-link"><h1 className="header__title">EquipMe.</h1></Link>
                    <ul className="header__nav">
                        <li className="header__nav-item">
                            <NavLink to="/pros" className="header__nav-item-link">Pros</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink to="/used" className="header__nav-item-link">Used</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <CTA isButton={false} text="Sign Up" link="/signup" />
                        </li>
                        <li className="header__nav-item">
                            <CTA isButton={false} text="Login" type="secondary" link="/login" />
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;