import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchGlovesList, fetchBatsList, fetchCleatsList } from './utils/api-utils';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Form from './components/Form/Form';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  const [gloves, setGloves] = useState([]);
  const [bats, setBats] = useState([]);
  const [cleats, setCleats] = useState([]);
  const [isError, setIsError] = useState(false);

  // Gloves API Request
  useEffect(() => {
    fetchGlovesList()
      .then((glovesResponse) => {
        setGloves(glovesResponse.data);
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

  return (
    <BrowserRouter>
    <Header />
    <Routes>
     <Route path="/" element={<Main />} />
     <Route path="/form" element={<Form />} />
     <Route path="/products/gloves" element={<ProductsPage products={gloves} />} />
     <Route path="/products/gloves/:productId" element={<ProductPage />} />
     <Route path="/products/bats" element={<ProductsPage products={bats} />} />
     <Route path="/products/bats/:productId" element={<ProductPage />} />
     <Route path="/products/cleats" element={<ProductsPage products={cleats} />} />
     <Route path="/products/cleats/:productId" element={<ProductPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
