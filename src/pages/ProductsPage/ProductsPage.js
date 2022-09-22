import { useLocation } from "react-router-dom";
import { fetchGlovesList, fetchBatsList, fetchCleatsList } from '../../utils/api-utils';
import { useState, useEffect } from "react";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsNav from "../../components/ProductsNav/ProductsNav";
import SortColumn from "../../components/SortColumn/SortColumn";
import "./ProductsPage.scss";


function ProductsPage({ }) {
    const location = useLocation();
    const newRequest = location.state.newRequest;
    console.log(newRequest)
    const [productList, setProductList] = useState([]);
    const [sortColumn, setSortColumn] = useState([]);
    const [gloves, setGloves] = useState([]);
    const [bats, setBats] = useState([]);
    const [cleats, setCleats] = useState([]);
    const [isError, setIsError] = useState(false);
  
    // Gloves API Request
    useEffect(() => {
      fetchGlovesList()
        .then((glovesResponse) => {
          setGloves(glovesResponse.data);
          setProductList(glovesResponse.data);
        })
        .catch(() => {
          setIsError(true);
          console.log("For developers: There was an error fetching the gloves")
        })
    }, []);
  
    // Bats API Request
    useEffect(() => {
      fetchBatsList()
        .then((batsResponse) => {
          setBats(batsResponse.data);
        })
        .catch(() => {
          setIsError(true);
          console.log("For developers: There was an error fetching the bats")
        })
    }, []);
  
    // Cleats API Request
    useEffect(() => {
      fetchCleatsList()
        .then((cleatsResponse) => {
          setCleats(cleatsResponse.data);
        })
        .catch(() => {
          setIsError(true);
          console.log("For developers: There was an error fetching the cleats")
        })
    }, []);
  
    if (isError) {
      return <span>There was an error fetching the data.</span>
    }
  
    if (!gloves || !bats || !cleats ) {
      return <span>Loading...</span>
    };

    const handleGlovesClick = () => {
        setProductList(gloves);
    }

    const handleBatsClick = () => {
        setProductList(bats);
    }

    const handleCleatsClick = () => {
        setProductList(cleats);
    }

    return (
        <main className="products">
            {/* <ProductsNav /> */}
            <ul>
                <li onClick={handleGlovesClick}>Gloves</li>
                <li onClick={handleBatsClick}>Bats</li>
                <li onClick={handleCleatsClick}>Cleats</li>
            </ul>
            <InfoBanner />
            <div className="products__content"> 
                <SortColumn category={productList.category}/>
                <ProductsList products={productList} />
            </div>
        </main>
    );
}

export default ProductsPage;