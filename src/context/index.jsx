import { createContext, useEffect, useState } from 'react';

export const ShoppingContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ShoppingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const productApi = await fetch('https://dummyjson.com/products');
    const productResponse = await productApi.json();

    if (productResponse && productResponse?.products?.length > 0) {
      setProductList(productResponse?.products);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShoppingContext.Provider value={{ productList, loading }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
