import "./SortColumn.scss";

function SortColumn({ brands }) {
    return (
        <div className="sort">
            <ul className="sort__brand-list">
                <span className="sort__list-label">Brands</span>
                <li className="sort__brand-list-item">
                    <input type="checkbox" id="Mizuno"/>
                    <label className="sort__label" htmlFor="Mizuno">{brands[0].brand}</label>
                </li>
                <li className="sort__brand-list-item">
                    <input type="checkbox" id="Rawlings"/>
                    <label className="sort__label" htmlFor="Rawlings">{brands[1].brand}</label>
                </li>
                <li className="sort__brand-list-item">
                    <input type="checkbox" id="Wilson"/>
                    <label className="sort__label" htmlFor="Wilson">{brands[2].brand}</label>
                </li>
                <li className="sort__brand-list-item">
                    <input type="checkbox" id="Easton"/>
                    <label className="sort__label" htmlFor="Easton">{brands[3].brand}</label>
                </li>
            </ul>
            <ul className="sort__price-list">
                <span className="sort__list-label">Price</span>
                <li className="sort__price-list-item">
                    <input type="checkbox"/>
                    <label className="sort__label" htmlFor="">less than $100</label>
                </li>
                <li className="sort__price-list-item">
                    <input type="checkbox"/>
                    <label className="sort__label" htmlFor="">$100 - $200</label>
                </li>
                <li className="sort__price-list-item">
                    <input type="checkbox"/>
                    <label className="sort__label" htmlFor="">$200 - $300</label>
                </li>
                <li className="sort__price-list-item">
                    <input type="checkbox"/>
                    <label className="sort__label" htmlFor="">$300 - $400</label>
                </li>
                <li className="sort__price-list-item">
                    <input type="checkbox"/>
                    <label className="sort__label" htmlFor="">$400 - $500</label>
                </li>
            </ul>
        </div>
    );
}

export default SortColumn;