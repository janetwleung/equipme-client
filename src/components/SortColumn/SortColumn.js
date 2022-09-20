import "./SortColumn.scss";

function SortColumn() {
    return (
        <div className="sort">
            <ul>
                <li>
                    <input type="checkbox"id="Mizuno"/>
                    <label htmlFor="Mizuno">Mizuno</label>
                </li>
                <li>
                    <input type="checkbox"id="Rawlings"/>
                    <label htmlFor="Rawlings">Rawlings</label>
                </li>
                <li>
                    <input type="checkbox"id="Wilson"/>
                    <label htmlFor="Wilson">Wilson</label>
                </li>
                <li>
                    <input type="checkbox"id="Easton"/>
                    <label htmlFor="Easton">Easton</label>
                </li>
                <li>
                    <input type="checkbox"id="Nokona"/>
                    <label htmlFor="Nokona">Nokona</label>
                </li>
            </ul>
        </div>
    );
}

export default SortColumn;