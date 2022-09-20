import "./ProductCard.scss";
import image from "../../assets/images/mizuno-franchise-series-baseball-infield-glove-11.75.jpeg";
import { Link } from "react-router-dom";

function ProductCard({ product, brand, productName, price, id }) {
    console.log(product);
    return (
        <Link className="product-card__link" to={`/products/gloves/:gloveId`}>
            <article className="product-card">
                <img className="product-card__image" src={image} alt={`${brand} ${product}`} />
                <div className="product-card__product-details">
                    <span className="product-card__name">Mizuno Franchise Series Baseball Infield Glove 11.75"</span>
                    <span className="product-card__price">$199.99</span>
                </div>
            </article>
        </Link>
    );
}

export default ProductCard;