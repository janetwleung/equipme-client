import InfoBanner from "../../components/InfoBanner/InfoBanner";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsNav from "../../components/ProductsNav/ProductsNav";
import SortColumn from "../../components/SortColumn/SortColumn";
import "./ProductsPage.scss";

function ProductsPage({ products }) {
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