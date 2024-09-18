import React from 'react'; 
import MyNavbar from './navbar.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';  // Custom CSS for additional styles
import { Button } from 'react-bootstrap';  

function App() { 
  return (
    <div className="mainPage">
      <MyNavbar />  
      <div className="container mt-4"> {/* Bootstrap container for spacing */}
        <div className="card text-center p-4">
          <h1>Reid's Book Market</h1>
          <p>Management App For Reid's Books</p>
          <img className="image img-fluid" src="/BookStore.png" alt="Book Store" />
          <Button className="custom-button mt-3 mb-2">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
