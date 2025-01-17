import React, { useState, useEffect } from "react";
import { useLoaderData } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';

export const ProductsMain = () => {
  const product = useLoaderData();
  const [filteredProducts, setFilteredProducts] = useState(product);
  const handleFilterChange = (filters) => {
    const { category, section } = filters;
    const filtered = product.filter((product) => {
      return (
        (category === '' || product.category === category) &&
        (section === '' || product.section === section)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="product-list-page">
      
      <h1>Product Listing</h1>
      {/* Filter Component */}
      <Filter onFilterChange={handleFilterChange} />

      {/* Product Cards */}
      <div className="product-list">
        <ProductList products={filteredProducts || []} />
      </div>
    </div>
  );
};
