// components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import '../css/ProductList.css';

function ProductList({ products }) {
  if (!Array.isArray(products)) {
    console.error("products is not an array:", products);
    return <div>Error: Products must be an array.</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;



