// src/components/Navbar.js - Optimized with Vite dev server HMR
import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Image Gallery</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;
