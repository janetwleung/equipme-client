import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsNav from "../../components/ProductsNav/ProductsNav";
import "./ProductsPage.scss";

function ProductsPage({ products }) {
    return (
        <main className="products">
            <ProductsNav />
            <ProductsList products={products}/>
        </main>
    );
}

export default ProductsPage;