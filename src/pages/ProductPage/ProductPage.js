import "./ProductPage.scss";
import CTA from "../../components/CTA/CTA";
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
            <button className="product-page__back-container" onClick={() => navigate(-1)}>
                <img src={backArrow} alt="Back arrow" />
                <span className="product-page__back">Back</span>
            </button>
            <div className="product-page__container">
                <div className="product-page__image-container">
                    <img className="product-page__image" src={product.image1} alt="glove" />
                </div>
                <div className="product-page__details">
                    <h1 className="product-page__name">{product.name}</h1>
                    <p className="product-page__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium repellendus obcaecati quisquam, voluptates ut ducimus rerum fugiat, cupiditate sint voluptas, soluta iure. Deleniti beatae hic eos, voluptates magnam repudiandae culpa?</p>
                    <span className="product-page__price">{product.price}</span>
                    <div className="product-page__button">
                        <CTA text="Buy Now"/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductPage;