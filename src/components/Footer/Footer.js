import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <Link to="/" className="footer__logo-link"><span className="footer__logo">EquipMe.</span></Link>
                <span className="footer__copyright">&copy; Janet Leung. All Rights Reserved</span>

            </div>
        </footer>
    );
}

export default Footer;