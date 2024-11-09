import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import './Navbar.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">E-Commerce-Site</Link>
        </div>
        <div className="navbar-links">
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
    </Router>
  );
}

export default App;
