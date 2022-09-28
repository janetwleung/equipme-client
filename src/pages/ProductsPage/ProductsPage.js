import { useLocation } from "react-router-dom";
import { fetchGlovesList, fetchBatsList, fetchCleatsList } from '../../utils/api-utils';
import { useState, useEffect } from "react";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import ProductsList from "../../components/ProductsList/ProductsList";
import SortColumn from "../../components/SortColumn/SortColumn";
import "./ProductsPage.scss";
import Loading from "../../components/Loading/Loading";

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
                if (newRequest.age <= 8) {
                    const filteredGloves = glovesData.filter(glove => (glove.size).includes("10"));
                    setGloves(filteredGloves);
                    setProductList(filteredGloves);
                }
                else if (newRequest.age > 8 && newRequest.age < 13) {
                    if (newRequest.position === "first base" || newRequest.position === "catcher") {
                        const filteredGloves = glovesData.filter(glove => (glove.name).includes("YOUTH") && (glove.name).includes("FIRST BASE"));
                        setGloves(filteredGloves);
                        setSortedProductList(filteredGloves);
                        setProductList(filteredGloves)
                    } if (newRequest.position === "infield") {
                        const filteredGloves = glovesData.filter(glove => (glove.position).includes("Infield"));
                        filteredGloves.splice(6, 1);
                        filteredGloves.splice(12,1);
                        const findDPGloves = filteredGloves.filter(glove => (glove.name).includes("DP15") || (glove.name).includes("SCDP15SS"));
                        filteredGloves.splice(2,2);
                        findDPGloves.forEach(DPGlove => filteredGloves.unshift(DPGlove));
                        setGloves(filteredGloves);
                        setSortedProductList(filteredGloves);
                        setProductList(filteredGloves);
                    } if (newRequest.position === "pitcher") {
                        const filteredGloves = glovesData.filter(glove => (glove.position).includes("Pitcher"));
                        const sortedGloves = filteredGloves.sort((a, b) => {
                            const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
                            const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
                            return aPrice - bPrice});
                        
                        setGloves(sortedGloves);
                        setProductList(sortedGloves);
                    } if (newRequest.position === "outfield") {
                        const filteredGloves = glovesData.filter(glove => (glove.position).includes("Infield"));
                        const sortedGloves = filteredGloves.sort((a, b) => {
                            const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
                            const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
                            return aPrice - bPrice});
                        sortedGloves.splice(0, 2);
                        sortedGloves.splice(7, 7);
                        setGloves(sortedGloves);
                        setProductList(sortedGloves);
                    }
                } else {
                    if (newRequest.level === "beginner" || newRequest.level === "house league" || newRequest.level === "select") {
                        const filteredGloves = glovesData.filter(glove => ((glove.position).toLowerCase()).includes((newRequest.position).toLowerCase()))
                        filteredGloves.splice(6, 1);
                        filteredGloves.splice(12, 1);
                        const sortedGloves = filteredGloves.sort((a, b) => {
                            const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
                            const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
                            return aPrice - bPrice});
                        setGloves(sortedGloves);
                        setProductList(sortedGloves);
                    } else {
                        if (newRequest.position === "outfield") {
                            const filteredGloves = glovesData.filter(glove => ((glove.position).toLowerCase()).includes((newRequest.position).toLowerCase()))
                            filteredGloves.splice(6, 1);
                            filteredGloves.splice(12, 1);
                            const moveGlove = filteredGloves.pop();
                            filteredGloves.unshift(moveGlove);
                            setGloves(filteredGloves);
                            setProductList(filteredGloves);
                        } if (newRequest.position === "infield") {
                            const filteredGloves = glovesData.filter(glove => ((glove.position).toLowerCase()).includes((newRequest.position).toLowerCase()))
                            filteredGloves.splice(6, 1);
                            filteredGloves.splice(12, 1);
                            const moveGlove = filteredGloves.pop();
                            filteredGloves.unshift(moveGlove);
                            setGloves(filteredGloves);
                            setProductList(filteredGloves);
                        } else {
                            const filteredGloves = glovesData.filter(glove => ((glove.position).toLowerCase()).includes((newRequest.position).toLowerCase()))
                            filteredGloves.splice(6, 1);
                            filteredGloves.splice(12, 1);
                            setGloves(filteredGloves);
                            setProductList(filteredGloves);
                        }
                    }
                }
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
                setSortType([
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
                ])

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
                if (newRequest.age >= 8 && newRequest.age <= 9) {
                    const filteredBats = batsData.filter(bat => (bat.length).includes("26") || (bat.length).includes("27") || (bat.length).includes("28") || (bat.length).includes("29"));
                    setBats(filteredBats);
                } else if (newRequest.age >= 10 && newRequest.age <= 13) {
                    const filteredBats = batsData.filter(bat => (bat.length).includes("28") || (bat.length).includes("29") || (bat.length).includes("30") || (bat.length).includes("31") || (bat.length).includes("32"));
                    if (newRequest.level === "beginner" || newRequest.level === "house league" || newRequest.level === "select") {
                        const sortedProducts = filteredBats.sort((a, b) => {
                            const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
                            const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
                            return aPrice - bPrice});
                            setBats(sortedProducts);
                    } else {
                        const sortedProducts = filteredBats.sort((a, b) => {
                            const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
                            const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
                            return bPrice - aPrice});
                            setBats(sortedProducts);
                    } 
                } else if (newRequest.age >= 14) {
                    const filteredBats = batsData.filter(bat => (bat.length).includes("31") || (bat.length).includes("32") || (bat.length).includes("33") || (bat.length).includes("34"));
                    if (newRequest.level === "beginner" || newRequest.level === "house league" || newRequest.level === "select") {
                        const sortedProducts = filteredBats.sort((a, b) => {
                            const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
                            const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
                            return aPrice - bPrice});
                            setBats(sortedProducts);
                    } else {
                        const sortedProducts = filteredBats.sort((a, b) => {
                            const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
                            const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
                            return bPrice - aPrice});
                            sortedProducts.splice(7, 4);
                            setBats(sortedProducts);
                    } 
                } else {
                    const filteredBats = batsData.filter(bat => (bat.length).includes("24") || (bat.length).includes("25") || (bat.length).includes("26"));
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
                const cleatsData = cleatsResponse.data;
                if (newRequest.age < 15 && newRequest.age > 10) {
                    const filteredCleats = cleatsData.filter(cleat => cleat.metal === "no");
                    setCleats(filteredCleats);
                } else {
                    cleatsData.pop();
                    setCleats(cleatsData);
                }
            })
            .catch(() => {
                setIsError(true);
                console.log("For developers: There was an error fetching the cleats")
            })
    }, [newRequest]);

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

    if (isError) {
        return <span>There was an error fetching the data.</span>
    }

    if (!gloves || !bats || !cleats || !sortColumn || !sortType || !productList) {
        return <Loading />
    };

    return (
        <main className="products">
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
                <InfoBanner newRequest={newRequest} products={!sortedProductList ? productList[0].category : sortedProductList[0].category}/>
                <div className="products__second-bar">
                    <span className="products__result-number">Showing Results {productList.length} of {productList.length}</span>
                    <div className="products__sort-container">
                        <label className="products__sort-label" htmlFor="sort">Sort</label>
                        <select className="products__sort-input" id="sort" onChange={(e) => handleChange(e.target.value)}  >
                            {sortType.map(option => (
                                <option value={option.value} key={option.id} className="products__sort-option">{option.text}</option>
                            ))}
                        </select>
                    </div>
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