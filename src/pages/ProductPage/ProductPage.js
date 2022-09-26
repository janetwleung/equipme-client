import "./ProductPage.scss";
import backArrow from "../../assets/icons/arrow-back.png"
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSpecificGlove, fetchSpecificBat, fetchSpecificCleat } from "../../utils/api-utils";

function ProductPage() {
    let { productId } = useParams();
    const [product, setProduct] = useState(); 

    const location = useLocation();
    const category = location.state.category;
    const navigate = useNavigate();

    useEffect(() => {
        if (category === "gloves") {
            fetchSpecificGlove(productId)
                .then((gloveResponse) => {
                    setProduct(gloveResponse.data)
                })
                .catch(() => {
                    console.log("there is an error")
                })
        }
        if (category === "bats") {
            fetchSpecificBat(productId)
                .then((batResponse) => {
                    setProduct(batResponse.data)
                })
                .catch(() => {
                    console.log("there is an error")
                })
        }
        if (category === "cleats") {
            fetchSpecificCleat(productId)
                .then((cleatResponse) => {
                    setProduct(cleatResponse.data)
                })
                .catch(() => {
                    console.log("there is an error")
                })
        }
    }, [productId, category]);

    if (!product) {
        return <span>loading...</span>
    }

    return (
        <main className="product-page">
            <div className="product-page__back-container" onClick={() => navigate(-1)}>
                <img src={backArrow} alt="Back arrow" className="product-page__arrow"/>
                <span className="product-page__back">Back</span>
            </div>
            <div className="product-page__container">
                <div className="product-page__image-container">
                    <img className="product-page__image" src={product.image1} alt="glove" />
                </div>
                <div className="product-page__details">
                    <h1 className="product-page__name">{(product.name).toLowerCase()}</h1>
                    <p className="product-page__description">{product.description}</p>
                    {product.length && <span className="product-page__length">Lengths Available: {product.length}</span>}
                    <span className="product-page__price">{product.price}</span>
                    <div className="product-page__button">
                        <a href={product.whereToBuy} target="_blank" rel="noreferrer" className="product-page__button-text">Buy Now</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductPage;