import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ShoppingContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ShoppingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    const productApi = await fetch('https://dummyjson.com/products');
    const productResponse = await productApi.json();

    if (productResponse && productResponse?.products?.length > 0) {
      setProductList(productResponse?.products);
      setLoading(false);
    }
  };

  const handleAddToCart = (getProductDetail) => {
    let cpyCurrentCartItems = [...cartItems];

    const findIndexOfCurrentItem = cpyCurrentCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetail?.id
    );

    if (findIndexOfCurrentItem === -1) {
      cpyCurrentCartItems.push({
        ...getProductDetail,
        quantity: 1,
        totalPrice: getProductDetail?.price,
      });
    } else {
      console.log('working on it');
      cpyCurrentCartItems[findIndexOfCurrentItem] = {
        ...cpyCurrentCartItems[findIndexOfCurrentItem],
        quantity: cpyCurrentCartItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice:
          cpyCurrentCartItems[findIndexOfCurrentItem].price *
          (cpyCurrentCartItems[findIndexOfCurrentItem].quantity + 1),
      };
    }

    setCartItems(cpyCurrentCartItems);
    localStorage.setItem('cartItems', JSON.stringify(cpyCurrentCartItems));
    navigate('/cart');
  };

  useEffect(() => {
    fetchProducts();
    setCartItems(JSON.parse(localStorage.getItem('cartItems') || []));
  }, []);

  console.log(cartItems);
  return (
    <ShoppingContext.Provider
      value={{
        productList,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
