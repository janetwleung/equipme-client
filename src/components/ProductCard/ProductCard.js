import "./ProductCard.scss";
import image from "../../assets/images/mizuno-franchise-series-baseball-infield-glove-11.75.jpeg";
import { Link } from "react-router-dom";

function ProductCard({ product, brand, name, price, id }) {
    return (
        <Link className="product-card__link" to={`/products/gloves/${id}`}>
            <article className="product-card">
                <img className="product-card__image" src={image} alt={`${brand} ${product}`} />
                <div className="product-card__product-details">
                    <span className="product-card__name">{`${brand} ${product.name}`}</span>
                    <span className="product-card__price">{product.price}</span>
                </div>
            </article>
        </Link>
    );
}

export default ProductCard;