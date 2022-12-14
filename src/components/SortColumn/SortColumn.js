import "./SortColumn.scss";

function SortColumn({ brands, setProductList }) {

    return (
        <div className="sort">
            <ul className="sort__brand-list">
                <span className="sort__list-label">Brands</span>
                {brands.map(brand => (
                    <li className="sort__brand-list-item" key={brand.id}>
                        <input type="checkbox" value={brand.brand} id={brand.brand} disabled/>
                        <label className="sort__label" htmlFor={brand.brand}>{brand.brand}</label>
                    </li>
                ))}
            </ul>
            <ul className="sort__price-list">
                <span className="sort__list-label">Price</span>
                <li className="sort__price-list-item">
                    <input type="checkbox" disabled/>
                    <label className="sort__label" htmlFor="">less than $100</label>
                </li>
                <li className="sort__price-list-item">
                    <input type="checkbox" disabled/>
                    <label className="sort__label" htmlFor="">$100 - $200</label>
                </li>
                <li className="sort__price-list-item">
                    <input type="checkbox" disabled/>
                    <label className="sort__label" htmlFor="">$200 - $300</label>
                </li>
                <li className="sort__price-list-item">
                    <input type="checkbox" disabled/>
                    <label className="sort__label" htmlFor="">$300 - $400</label>
                </li>
                <li className="sort__price-list-item">
                    <input type="checkbox" disabled/>
                    <label className="sort__label" htmlFor="">$400 - $500</label>
                </li>
            </ul>
        </div>
    );
}

export default SortColumn;