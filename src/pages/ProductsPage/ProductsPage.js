import { useLocation } from "react-router-dom";
import { fetchGlovesList, fetchBatsList, fetchCleatsList } from '../../utils/api-utils';
import { useState, useEffect } from "react";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import ProductsList from "../../components/ProductsList/ProductsList";
import SortColumn from "../../components/SortColumn/SortColumn";
import "./ProductsPage.scss";


function ProductsPage() {
    const location = useLocation();
    const newRequest = location.state.userInformation;

    const [productList, setProductList] = useState(null);
    const [sortedProductList, setSortedProductList] = useState(null);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortType, setSortType] = useState([]);
    const [gloves, setGloves] = useState(null);
    const [bats, setBats] = useState(null);
    const [cleats, setCleats] = useState(null);
    const [isError, setIsError] = useState(false);
    const [gloveActive, setGloveActive] = useState(true);
    const [batActive, setBatActive] = useState(false);
    const [cleatActive, setCleatActive] = useState(false);
    // const [selected, setSelected] = useState();

    const optionArray = [
        {
            text: "Recommended",
            value: "recommended",
            id: 1
        },
        {
            text: "Price: Low to High",
            value: "priceLowHigh",
            id: 2
        },
        {
            text: "Price: High to Low",
            value: "priceHighLow",
            id: 3
        },
        {
            text: "Brand: A to Z",
            value: "brandAZ",
            id: 4
        },
        {
            text: "Brand: Z to A",
            value: "brandZA",
            id: 5
        }
    ]

    // Gloves API Request
    useEffect(() => {
        fetchGlovesList()
            .then((glovesResponse) => {
                const glovesData = glovesResponse.data;
                const filteredGloves = glovesData.filter(glove => ((glove.position).toLowerCase()).includes((newRequest.position).toLowerCase()))
                setGloves(filteredGloves);
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
                setSortType(optionArray)
                setProductList(filteredGloves);
            })
            .catch(() => {
                setIsError(true);
                console.log("For developers: There was an error fetching the gloves")
            })
    }, [newRequest]);

    // Bats API Request
    useEffect(() => {
        fetchBatsList()
            .then((batsResponse) => {
                const batsData = batsResponse.data
                if (newRequest.age > 8) {
                    if (newRequest.level === "pro" || newRequest.level === "rep") {
                        const filteredBats = batsData.filter(bat => (parseFloat(bat.price.slice(1, -1))) > 300);
                        setBats(filteredBats);
                    }
                    if (newRequest.level === "beginner" || newRequest.level === "houseLeague" || newRequest.level === "select") {
                        // const filteredBats = batsData.filter(bat => (parseFloat(bat.price.slice(1, -1))) < 300);
                        // setBats(filteredBats);
                        const sortedProducts = batsData.sort((a, b) => {
                            const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
                            const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
                            return aPrice - bPrice;
                        })
                        const filteredBats = sortedProducts.filter(bat => (parseFloat(bat.price.slice(1, -1))) > 50)
                        setBats(filteredBats);
                    }
                } else {
                    const filteredBats = batsData.filter(bat => bat.age === "5, 6, 7, 8")
                    setBats(filteredBats);
                }
            })
            .catch(() => {
                setIsError(true);
                console.log("For developers: There was an error fetching the bats")
            })
    }, [newRequest]);

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
        setGloveActive(true);
        setBatActive(false);
        setCleatActive(false);
        setProductList(gloves);
        setSortedProductList(gloves);
        setSortType([...optionArray])
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
        setBatActive(true);
        setGloveActive(false);
        setCleatActive(false);
        setProductList(bats);
        setSortedProductList(bats);
        setSortType(optionArray);
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
        setGloveActive(false);
        setCleatActive(true);
        setBatActive(false);
        setProductList(cleats);
        setSortedProductList(cleats);
        setSortType([...optionArray])
        setSortColumn(
            [
                {
                    brand: "Mizuno",
                    id: 1
                }
            ])
    }

    const handleChange = (value) => {
        console.log(value);
        if (value === "recommended") {
            setSortedProductList(gloves)
        }
        if (value === "priceLowHigh") {
            const sortedProducts = [...productList].sort((a, b) => {
                const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
                const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
                return aPrice - bPrice;
            })
            // setSortType("Price: Low to High");
            setSortedProductList(sortedProducts);
        }
        if (value === "priceHighLow") {
            const sortedProducts = [...productList].sort((a, b) => {
                const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
                const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
                return bPrice - aPrice;
            })
            // setSortType("Price: High to Low")
            setSortedProductList(sortedProducts);
        }
        if (value === "brandAZ") {
            const sortedProducts = [...productList].sort((a, b) => ((a.brand < b.brand) ? -1 : 1))
            // setSortType("Brand: A to Z");
            setSortedProductList(sortedProducts);
        }
        if (value === "brandZA") {
            const sortedProducts = [...productList].sort((a, b) => ((a.brand > b.brand) ? -1 : 1))
            // setSortType("Brand: Z to A");
            setSortedProductList(sortedProducts);
        }
    }

    if (!gloves || !bats || !cleats || !sortColumn || !sortType) {
        return <span>Loading...</span>
    };

    return (
        <main className="products">
            {/* <ProductsNav /> */}
            <div className="products__top-bar">
                <ul className="products__nav-list">
                    <li className={gloveActive ? "products__nav-list-item--active" : "products__nav-list-item"} onClick={handleGlovesClick}>Gloves</li>
                    <li className={batActive ? "products__nav-list-item--active" : "products__nav-list-item"} onClick={handleBatsClick}>Bats</li>
                    <li className={cleatActive ? "products__nav-list-item--active" : "products__nav-list-item"} onClick={handleCleatsClick}>Cleats</li>
                </ul>
                <div className="products__blank">
                </div>
            </div>
            <div className="products__page-content">
                <InfoBanner />
                <div className="products__sort-container">
                    <label className="products__sort-label" htmlFor="sort">Sort</label>
                    <select className="products__sort-input" id="sort" onChange={(e) => handleChange(e.target.value)}  >
                        {sortType.map(option => (
                            <option value={option.value} key={option.id}>{option.text}</option>
                        ))}
                    </select>
                </div>
                <div className="products__content">
                    <SortColumn brands={sortColumn} setProductList={setProductList}/>
                    <ProductsList products={!sortedProductList ? productList : sortedProductList} />
                </div>
            </div>
        </main>
    );
}

export default ProductsPage;