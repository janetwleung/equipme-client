import ProductCard from "../../components/ProductCard/ProductCard";
import ProductsNav from "../../components/ProductsNav/ProductsNav";
import "./ProductsPage.scss";

function ProductsPage({ product }) {
    return (
        <main className="products">
            <ProductsNav />
            <ProductCard />
        </main>
    );
}

export default ProductsPage;