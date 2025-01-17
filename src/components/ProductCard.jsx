// components/ProductCard.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import '../css/ProductCard.css';
import { Button, Modal, Card } from 'react-bootstrap';

function ProductCard({ product }) {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  

  const handleAddToCart = () => {

    dispatch(addToCart(product));

    if (username == null) {

      alert("Item added to cart successfully . Please login view your  cart");

    } else {
      alert("Item added to cart successfully");
    }


  };


  return (


    <Card className="product-card">
      <a href={`/product/${product.id}`} target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src={product.image} />
      </a>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        

        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        

      </Card.Body>



    </Card>



  );
}

export default ProductCard;
