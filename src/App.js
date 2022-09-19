import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Form from './components/Form/Form';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
     <Route path="/" element={<Main />} />
     <Route path="/form" element={<Form />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
