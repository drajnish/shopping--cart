import { useContext } from 'react';
import { ShoppingContext } from '../../context';
import ProductTile from '../../component/productTile';

function Products() {
  const { loading, productList } = useContext(ShoppingContext);

  if (loading) return <h2>Loading products! Please wait.</h2>;

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 mx-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">
            Products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {productList && productList?.length > 0 ? (
            productList.map((product) => (
              <ProductTile key={product?.id} product={product} />
            ))
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
