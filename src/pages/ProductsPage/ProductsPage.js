// import { useLocation } from "react-router-dom";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsNav from "../../components/ProductsNav/ProductsNav";
import SortColumn from "../../components/SortColumn/SortColumn";
import "./ProductsPage.scss";


function ProductsPage({ products }) {

    // const location = useLocation();
    // const newRequest = location.state.newRequest;


    return (
        <main className="products">
            <ProductsNav />
            <InfoBanner />
            <div className="products__content"> 
                <SortColumn category={products.category}/>
                <ProductsList products={products} />
            </div>
        </main>
    );
}

export default ProductsPage;