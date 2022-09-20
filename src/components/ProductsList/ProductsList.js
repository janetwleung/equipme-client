import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.scss";

function ProductsList({ product }) {

    return (
        <ul className="products-list">
            {/* Use prop to map through list of gloves/bats/cleats below using ProductCard component */}
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
                <li><ProductCard /></li>
        </ul>
    );
}

export default ProductsList;