// components/Header.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import { NavLink } from "react-router-dom";

function Header() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (







    /* Updated Navbar Component */
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#"><span className="kickstash">
          <span className="highlight">K</span>ick<span className="highlight">S</span>tash
        </span></Navbar.Brand>
        <Nav className="ml-auto">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
          
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Shop
          </NavLink>


          {username ? (
            <>
              <span className="nav-link title-user">Hi {username}</span>
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                Cart ({cart.length})
              </NavLink>
              <button onClick={handleLogout} className="ml-3">
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Login
            </NavLink>
          )}
        </Nav>
      </Container>
    </Navbar>
    






  );
}

export default Header;
