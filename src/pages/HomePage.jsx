import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarouselBanner from '../components/CarouselBanner';
import ProductList from '../components/ProductList';
import '../css/HomePage.css';
import WhyChooseUs from '../components/WhyChooseUs';


const HomePage = () => {
  const products = useLoaderData();
  //alert(products.value);
  //console.log("test".products);   
  const featuredProducts = (Array.isArray(products) ? products : []).filter(product => product.featured);
  //const featuredProducts = products.filter(product => product.featured);

  return (
    <>
      <CarouselBanner />
        <WhyChooseUs />
       <div className="featured-products">
        <h2>Featured Products</h2>
        <ProductList products={featuredProducts} />
      </div>
      </>
  );
};

export default HomePage;
