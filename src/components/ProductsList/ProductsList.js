import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.scss";

function ProductsList({ products }) {
    return (
        <ul className="products-list">
            {/* Use prop to map through list of gloves/bats/cleats below using ProductCard component */}
                {products.map(product => (
                <li key={product.id}>
                    <ProductCard
                        id={product.id}
                        product={product}
                        brand={product.brand}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        category={product.category}
                    />
                </li>
                ))}
        </ul>
    );
}

export default ProductsList;