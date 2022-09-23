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
    // console.log(newRequest);

    const [productList, setProductList] = useState(null);
    const [sortedProductList, setSortedProductList] = useState(null);
    const [sortColumn, setSortColumn] = useState(null);
    const [gloves, setGloves] = useState([]);
    const [bats, setBats] = useState([]);
    const [cleats, setCleats] = useState([]);
    const [isError, setIsError] = useState(false);
    const [selected, setSelected] = useState();
  
    // Gloves API Request
    useEffect(() => {
      fetchGlovesList()
        .then((glovesResponse) => {
          setGloves(glovesResponse.data);
          setSortColumn(
            [{
                brand: "Mizuno",
                id: 1
            },
            {
                brand: "Rawlings",
                id: 2
            },
            {
                brand: "Wilson",
                id: 3
            },
            {
                brand: "Nokona",
                id: 5
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
                id: 1
            },
            {
                brand: "Rawlings",
                id: 2
            },
            {
                brand: "Wilson",
                id: 3
            },
            {
                brand: "Nokona",
                id: 5
            }]
          )
    }

    const handleBatsClick = () => {
        setProductList(bats);
        setSortColumn(
            [{
                brand: "Mizuno",
                id: 1
            },
            {
                brand: "Rawlings",
                id: 2
            },
            {
                brand: "Easton",
                id: 4
            },
            {
                brand: "DeMarini",
                id: 6
            }]
          )
    }

    const handleCleatsClick = () => {
        setProductList(cleats);
        setSortColumn(
            [
                {
                    brand: "Mizuno",
                    id: 1
                }
            ])
    }

    const handleChange = (value) => {
        if (value === "priceLowHigh") {
            const sortedProducts = [...productList].sort((a,b) => {
                const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1,-1)) : 0;
                const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1,-1)) : 0;
                return aPrice - bPrice;
            })
            // SET LIST TO THIS sortedGloves
            setSortedProductList(sortedProducts);
        } 
        if (value === "priceHighLow") {
            const sortedProducts = [...productList].sort((a,b) => {
                const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1,-1)) : 0;
                const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1,-1)) : 0;
                return bPrice - aPrice;
            })
            setSortedProductList(sortedProducts);
            console.log(sortedProducts)
        }
        if (value === "brandAZ") {
            const sortedProducts = [...productList].sort((a,b) => ((a.brand < b.brand) ? -1 : 1))
            setSortedProductList(sortedProducts);
            console.log(sortedProducts);
        }
        if (value === "brandZA") {
            const sortedProducts = [...productList].sort((a,b) => ((a.brand > b.brand) ? -1 : 1))
            setSortedProductList(sortedProducts);
        }
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
                    <select className="products__sort-input" id="sort" onChange={(e)=>handleChange(e.target.value)} value={selected} >
                        <option value=""></option>
                        <option value="recommended">Recommended</option>
                        <option value="priceLowHigh">Price: Low to High</option>
                        <option value="priceHighLow">Price: High to Low</option>
                        <option value="brandAZ">Brand: A to Z</option>
                        <option value="brandZA">Brand: Z to A</option>
                    </select>
                </div>
            </div>
            <InfoBanner />
            <div className="products__content"> 
                <SortColumn brands={sortColumn}/>
                <ProductsList products={!sortedProductList ? productList : sortedProductList} />
            </div>
        </main>
    );
}

export default ProductsPage;