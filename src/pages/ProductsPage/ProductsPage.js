import { useLocation } from "react-router-dom";
import { fetchGlovesList, fetchBatsList, fetchCleatsList } from '../../utils/api-utils';
import { useState, useEffect } from "react";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsNav from "../../components/ProductsNav/ProductsNav";
import SortColumn from "../../components/SortColumn/SortColumn";
import "./ProductsPage.scss";


function ProductsPage() {
    const location = useLocation();
    const newRequest = location.state.newRequest;
    console.log(newRequest);

    const [productList, setProductList] = useState([]);
    const [sortColumn, setSortColumn] = useState(null);
    const [gloves, setGloves] = useState([]);
    const [bats, setBats] = useState([]);
    const [cleats, setCleats] = useState([]);
    const [isError, setIsError] = useState(false);
  
    // Gloves API Request
    useEffect(() => {
      fetchGlovesList()
        .then((glovesResponse) => {
          setGloves(glovesResponse.data);
          setSortColumn(
            [{
                brand: "Mizuno",
            },
            {
                brand: "Rawlings",
            },
            {
                brand: "Wilson",
            },
            {
                brand: "Nokona",
            }]
          )
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


    const handleGlovesClick = () => {
        setProductList(gloves);
        setSortColumn(
            [{
                brand: "Mizuno",
            },
            {
                brand: "Rawlings",
            },
            {
                brand: "Wilson",
            },
            {
                brand: "Nokona",
            }]
          )
    }

    const handleBatsClick = () => {
        setProductList(bats);
        setSortColumn(
            [{
                brand: "Mizuno",
            },
            {
                brand: "Rawlings",
            },
            {
                brand: "Easton",
            },
            {
                brand: "DeMarini",
            }]
          )
    }

    const handleCleatsClick = () => {
        setProductList(cleats);
        setSortColumn(
            [
                {
                    brand: "Mizuno"
                },
                {
                    brand: "Mizuno"
                },
                {
                    brand: "Mizuno"
                },
                {
                    brand: "Mizuno"
                }
            ])
    }

    if (!gloves || !bats || !cleats || !sortColumn) {
        return <span>Loading...</span>
      };

    return (
        <main className="products">
            {/* <ProductsNav /> */}
            <div className="products__top-bar">
                <ul className="products__nav-list">
                    <li className="products__nav-list-item" onClick={handleGlovesClick}>Gloves</li>
                    <li className="products__nav-list-item" onClick={handleBatsClick}>Bats</li>
                    <li className="products__nav-list-item" onClick={handleCleatsClick}>Cleats</li>
                </ul>
                <div className="products__sort-container">
                    <label className="products__sort-label" htmlFor="sort">Sort</label>
                    <select className="products__sort-input" id="sort">
                        <option value=""></option>
                        <option value="Recommended">Recommended</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Brand: A to Z</option>
                        <option>Brand: Z to A</option>
                    </select>
                </div>
            </div>
            <InfoBanner />
            <div className="products__content"> 
                <SortColumn brands={sortColumn}/>
                <ProductsList products={productList} />
            </div>
        </main>
    );
}

export default ProductsPage;