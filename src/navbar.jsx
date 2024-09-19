import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; 
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/customers">Customers</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;