import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/products';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
