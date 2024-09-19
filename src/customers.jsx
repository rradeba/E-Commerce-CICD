import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

// Reusable Form Component
const CustomerForm = ({ onSubmit, formType }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerID, setCustomerID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === 'create') {
      onSubmit(customerName, customerEmail, customerPhone); 
    } else if (formType === 'edit') {
      onSubmit(customerID, customerName, customerEmail, customerPhone); 
    } else if (formType === 'find' || formType === 'delete') {
      onSubmit(customerID); // Only pass the customer ID
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Customer Name Input for create and edit */}
      {(formType === 'create' || formType === 'edit') && (
        <>
          <Form.Group className="cForm" controlId="formCustomerName">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="cForm" controlId="formCustomerEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="cForm" controlId="formCustomerPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Phone Number"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              required
            />
          </Form.Group>
        </>
      )}

      {/* Customer ID Input for find, edit, and delete */}
      {(formType === 'find' || formType === 'delete' || formType === 'edit') && (
        <Form.Group className="cForm" controlId="formCustomerID">
          <Form.Label>Customer ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Customer ID"
            value={customerID}
            onChange={(e) => setCustomerID(e.target.value)}
            required
          />
        </Form.Group>
      )}

      {/* Submit Button */}
      <Button variant="primary" type="submit" className="mt-3">
        {formType === 'create'
          ? 'Create Customer'
          : formType === 'edit'
          ? 'Edit Customer'
          : formType === 'find'
          ? 'Find Customer'
          : 'Delete Customer'}
      </Button>
    </Form>
  );
};

function Customers() {
  const handleFormSubmit = (customerID, customerName, customerEmail, customerPhone) => {
    // Handle form submission logic here
    console.log('Customer ID:', customerID);
    if (customerName) console.log('Customer Name:', customerName);
    if (customerEmail) console.log('Customer Email:', customerEmail);
    if (customerPhone) console.log('Customer Phone:', customerPhone);
  };

  return (
    <Container>
      <h1 className="m-3">Customer Forms</h1>

      <div>
        <h2 className="mt-3">Create Customer</h2>
        <CustomerForm onSubmit={handleFormSubmit} formType="create" />
      </div>

      <div>
        <h2 className="mt-3">Find Customer</h2>
        <CustomerForm onSubmit={handleFormSubmit} formType="find" />
      </div>

      <div>
        <h2 className="mt-3">Edit Customer</h2>
        <CustomerForm onSubmit={handleFormSubmit} formType="edit" />
      </div>

      <div>
        <h2 className="mt-3">Delete Customer</h2>
        <CustomerForm onSubmit={handleFormSubmit} formType="delete" />
      </div>
    </Container>
  );
}

export default Customers;
