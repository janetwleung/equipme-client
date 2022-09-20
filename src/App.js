import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Form from './components/Form/Form';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import gloves from './assets/data/gloves.json';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
     <Route path="/" element={<Main />} />
     <Route path="/form" element={<Form />} />
     <Route path="/products/gloves" element={<ProductsPage products={gloves} />} />
     <Route path="/products/bats" element={<ProductsPage products="bats" />} />
     <Route path="/products/cleats" element={<ProductsPage products="cleats" />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
