import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Form from './components/Form/Form';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
     <Route path="/" element={<Main />} />
     <Route path="/form" element={<Form />} />
     <Route path="/products" element={<ProductsPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
