import "./ProductCard.scss";
import image from "../../assets/images/mizuno-franchise-series-baseball-infield-glove-11.75.jpeg";

function ProductCard({ product, brand, productName, price }) {
    return (
        <card className="product-card">
            <img className="product-card__image" src={image} alt={`${brand} ${product}`} />
            <div className="product-card__product-details">
                <span className="product-card__name">Mizuno Franchise Series Baseball Infield Glove 11.75"</span>
                <span className="product-card__price">$199.99</span>
            </div>
        </card>
    );
}

export default ProductCard;