import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsNav from "../../components/ProductsNav/ProductsNav";
import "./ProductsPage.scss";

function ProductsPage({ product }) {
    return (
        <main className="products">
            <ProductsNav />
            <ProductsList />
        </main>
    );
}

export default ProductsPage;