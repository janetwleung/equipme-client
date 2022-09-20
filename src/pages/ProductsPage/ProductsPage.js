import ProductsNav from "../../components/ProductsNav/ProductsNav";
import "./ProductsPage.scss";

function ProductsPage({ product }) {
    return (
        <main className="products">
            <ProductsNav />
        </main>
    );
}

export default ProductsPage;