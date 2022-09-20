import "./ProductPage.scss";
import image from "../../assets/images/mizuno-franchise-series-baseball-infield-glove-11.75.jpeg";
import CTA from "../../components/CTA/CTA";
import backArrow from "../../assets/icons/arrow-back.png"
import { useParams } from "react-router-dom";

function ProductPage() {
    let { productId } = useParams();
    console.log(productId);
    return (
        <main className="product-page">
            <div className="product-page__back-container">
                <img src={backArrow} alt="Back arrow" />
                <span className="product-page__back">Back</span>
            </div>
            <div className="product-page__container">
                <div className="product-page__image-container">
                    <img className="product-page__image" src={image} alt="glove" />
                </div>
                <div className="product-page__details">
                    <h1 className="product-page__name">Mizuno Global Elite Infielders Glove 11.5"</h1>
                    <p className="product-page__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium repellendus obcaecati quisquam, voluptates ut ducimus rerum fugiat, cupiditate sint voluptas, soluta iure. Deleniti beatae hic eos, voluptates magnam repudiandae culpa?</p>
                    <span className="product-page__price">$259.99</span>
                    <div className="product-page__button">
                        <CTA text="Buy Now"/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductPage;