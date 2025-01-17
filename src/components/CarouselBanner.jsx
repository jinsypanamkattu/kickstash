// components/CarouselBanner.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/CarouselBanner.css';

function CarouselBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/banner4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Best Shoes for Summer</h3>
          <p>Discover our exclusive summer collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
           src="/assets/images/banner6.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Winter Specials</h3>
          <p>Stay warm and stylish this winter.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
           src="/assets/images/banner7.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>For Every Occasion</h3>
          <p>Find shoes that match your lifestyle.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBanner;
