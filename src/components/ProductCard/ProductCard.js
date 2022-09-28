import "./ProductCard.scss";
import { Link } from "react-router-dom";

function ProductCard({ brand, name, price, id, category, image }) {
    return (
        <Link className="product-card__link" to={`/products/${id}`} state={{category}}>
            <article className="product-card">
                <img className="product-card__image" src={image} alt={`${brand} ${name}`} />
                <div className="product-card__product-details">
                    <span className="product-card__name">{`${brand} ${name.toLowerCase()}`}</span>
                    <span className="product-card__price">{price}</span>
                </div>
            </article>
        </Link>
    );
}

export default ProductCard;