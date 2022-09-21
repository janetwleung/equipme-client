import { useLocation } from "react-router-dom";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsNav from "../../components/ProductsNav/ProductsNav";
import SortColumn from "../../components/SortColumn/SortColumn";
import "./ProductsPage.scss";


function ProductsPage({ products }) {

    const location = useLocation();
    console.log(location.state.newRequest.age);

    return (
        <main className="products">
            <ProductsNav />
            <InfoBanner />
            <div className="products__content"> 
                <SortColumn />
                <ProductsList products={products}/>
            </div>
        </main>
    );
}

export default ProductsPage;