import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/products';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" exact element={<Products />} />
        <Route path="/product-detail/:id" exact element={<ProductDetail />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
