import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchGlovesList, fetchBatsList, fetchCleatsList } from './utils/api-utils';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Form from './components/Form/Form';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import gloves from './assets/data/gloves.json';
import bats from "./assets/data/bats.json";
import cleats from "./assets/data/cleats.json";


function App() {
  const [gloves, setGloves] = useState([]);
  const [bats, setBats] = useState([]);
  const [cleats, setCleats] = useState([]);

  // Gloves API Request
  useEffect(() => {
    fetchGlovesList()
      .then((glovesResponse) => {
        setGloves(glovesResponse.data);
        console.log(glovesResponse.data);
      })
      .catch(() => {

      })
  });

  // // Bats API Request
  // useEffect(() => {
  //   fetchBatsList()
  //     .then(() => {

  //     })
  //     .catch(() => {

  //     })
  // })

  // // Cleats API Request
  // useEffect(() => {
  //   fetchCleatsList()
  //     .then(() => {

  //     })
  //     .catch(() => {

  //     })
  // })



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
