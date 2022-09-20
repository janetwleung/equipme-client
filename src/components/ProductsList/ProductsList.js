import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.scss";
import { v4 as uuidv4 } from 'uuid';

function ProductsList({ products }) {
console.log(uuidv4());
    return (
        <ul className="products-list">
            {/* Use prop to map through list of gloves/bats/cleats below using ProductCard component */}
                {products.map(product => (
                <li>
                    <ProductCard
                        key={uuidv4()}
                        product={product}/>
                </li>
                ))}
        </ul>
    );
}

export default ProductsList;