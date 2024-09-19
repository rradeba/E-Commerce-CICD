import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

// Reusable Form Component
const OrderForm = ({ onSubmit }) => {
  const [itemNumber, setItemNumber] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {   
    e.preventDefault();
    // Pass itemNumber and quantity to the parent
    onSubmit(itemNumber, quantity);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Item Number Input */}
      <Form.Group className="cForm" controlId="formItemNumber">
        <Form.Label>Item Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the 6 digit Item Number..."
          value={itemNumber}
          onChange={(e) => setItemNumber(e.target.value)}
          required
        />
      </Form.Group>

      {/* Quantity Input */}
      <Form.Group className="cForm" controlId="formQuantity">
        <Form.Label>Item Quantity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter the quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </Form.Group>

      {/* Submit Button */}
      <Button variant="primary" type="submit" className="mt-3">
        Place Order
      </Button>
    </Form>
  );
};

function Orders() {
  const handleFormSubmit = (itemNumber, quantity) => {
    // Handle form submission logic here
    console.log('Item Number:', itemNumber);
    console.log('Quantity:', quantity);
  };

  return (
    <Container>
      <div>
        <h2 className="mt-3">New Order</h2>
        <OrderForm onSubmit={handleFormSubmit} />
      </div>
    </Container>
  );
}

export default Orders;

