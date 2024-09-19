import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

// Reusable Form Component
const ProductForm = ({ onSubmit, formType }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemID, setItemID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === 'create' || formType === 'edit') {
      onSubmit(itemID, itemName, itemPrice, itemDescription); // Pass form values to parent
    } else if (formType === 'find' || formType === 'delete') {
      onSubmit(itemID); // Only pass the item ID
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Item Number Input for all form types */}
      <Form.Group className="cForm" controlId="formItemID">
        <Form.Label>Item Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the Item Number"
          value={itemID}
          onChange={(e) => setItemID(e.target.value)}
          required
        />
      </Form.Group>

      {/* Conditional Fields for Create and Edit */}
      {(formType === 'create' || formType === 'edit') && (
        <>
          {/* Item Name Input */}
          <Form.Group className="cForm" controlId="formItemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </Form.Group>

          {/* Item Price Input */}
          <Form.Group className="cForm" controlId="formItemPrice">
            <Form.Label>Item Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Item Price"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              required
            />
          </Form.Group>

          {/* Item Description Input */}
          <Form.Group className="cForm" controlId="formItemDescription">
            <Form.Label>Item Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Item Description"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
            />
          </Form.Group>
        </>
      )}

      {/* Submit Button */}
      <Button variant="primary" type="submit" className="mt-3">
        {formType === 'create'
          ? 'Create Product'
          : formType === 'edit'
          ? 'Edit Product'
          : formType === 'find'
          ? 'Find Product'
          : 'Delete Product'}
      </Button>
    </Form>
  );
};

function Products() {
  const handleFormSubmit = (itemID, itemName, itemPrice, itemDescription) => {
    // Handle form submission logic here
    console.log('Item ID:', itemID);
    if (itemName) console.log('Item Name:', itemName);
    if (itemPrice) console.log('Item Price:', itemPrice);
    if (itemDescription) console.log('Item Description:', itemDescription);
  };

  return (
    <Container>
      <h1 className="m-3">Product Forms</h1>

      <div>
        <h2 className="mt-3">Create Product</h2>
        <ProductForm onSubmit={handleFormSubmit} formType="create" />
      </div>

      <div>
        <h2 className="mt-3">Find Product</h2>
        <ProductForm onSubmit={handleFormSubmit} formType="find" />
      </div>

      <div>
        <h2 className="mt-3">Edit Product</h2>
        <ProductForm onSubmit={handleFormSubmit} formType="edit" />
      </div>

      <div>
        <h2 className="mt-3">Delete Product</h2>
        <ProductForm onSubmit={handleFormSubmit} formType="delete" />
      </div>
    </Container>
  );
}

export default Products;



