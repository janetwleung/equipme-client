import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Form from './components/Form/Form';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import gloves from './assets/data/gloves.json';
import bats from "./assets/data/bats.json";
import cleats from "./assets/data/cleats.json";
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
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
