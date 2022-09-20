import "./ProductsNav.scss";
import { NavLink } from "react-router-dom";

function ProductsNav() {
    return (
        <div className="products__top-bar">
            <ul className="products__nav">
                <li className="products__nav-item">
                    <NavLink to="/products/glove" className={({ isActive }) => "products__nav-item-link" + (isActive ? " products__nav-item-link--active" : "")}>
                        Gloves
                    </NavLink>
                </li>
                <li className="products__nav-item">
                    <NavLink to="/products/bats" className={({ isActive }) => "products__nav-item-link" + (isActive ? " products__nav-item-link--active" : "")}>
                        Bats
                    </NavLink>
                </li>
                <li className="products__nav-item">
                    <NavLink to="products/cleats" className={({ isActive }) => "products__nav-item-link" + (isActive ? " products__nav-item-link--active" : "")}>
                        Cleats
                    </NavLink>
                </li>
            </ul>
            <div className="products__sort-container">
                <label className="products__sort-label" htmlFor="sort">Sort</label>
                <select className="products__sort-input" id="sort" placeholder="Recommended"></select>
            </div>
        </div>
    );
}

export default ProductsNav;