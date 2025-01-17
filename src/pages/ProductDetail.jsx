import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductDetail = () => {
  const product = useLoaderData();
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    
      dispatch(addToCart(product));
  
      if (username == null) {
  
        alert("Item added to cart successfully . Please login view your  cart");
  
      } else {
        alert("Item added to cart successfully");
      }
    }
  

  return (
    <Card className="shadow-sm">
        <div className="product-card-buttons-image">
      <Card.Img variant="top" src={`/assets/${product.image}`} />
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>${product.description}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                
        
      </Card.Body>

      
    </Card>
  );
};

export default ProductDetail;

