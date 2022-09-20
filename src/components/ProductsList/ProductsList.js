import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.scss";
import { v4 as uuidv4 } from 'uuid';

function ProductsList({ products }) {
    return (
        <ul className="products-list">
            {/* Use prop to map through list of gloves/bats/cleats below using ProductCard component */}
                {products.map(product => (
                <li>
                    <ProductCard
                        key={uuidv4()}
                        id={uuidv4()}
                        product={product}
                        brand={product.brand}
                        name={product.name}
                        image1={product.image1}
                        price={product.price}
                    />
                </li>
                ))}
        </ul>
    );
}

export default ProductsList;