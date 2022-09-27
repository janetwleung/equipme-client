import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Form from './components/Form/Form';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProsPage from './pages/ProsPage/ProsPage';
import RosterPage from './pages/RosterPage/RosterPage';
import AthletePage from './pages/AthletePage/AthletePage';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
     <Route path="/" element={<Main />} />
     <Route path="/form/:sportId" element={<Form />} />
     <Route path="/what-the-pros-wear" element={<ProsPage />} />
     <Route path="/pros/Softball" element={<RosterPage />} />
     <Route path="/pros/Softball/:athleteId" element={<AthletePage />} />
     <Route path="/products/gloves" element={<ProductsPage />} />
     <Route path="/products/gloves/:productId" element={<ProductPage />} />
     <Route path="/products/bats" element={<ProductsPage />} />
     <Route path="/products/bats/:productId" element={<ProductPage />} />
     <Route path="/products/cleats" element={<ProductsPage />} />
     <Route path="/products/cleats/:productId" element={<ProductPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
