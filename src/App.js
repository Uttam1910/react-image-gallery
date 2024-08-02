// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './component/Gallery';
import ImageView from './component/ImageView';
import Navbar from './component/Navbar';
import './App.css';

const About = () => (
    <div className="about">
        <h2>About Our Website</h2>
        <p>Welcome to our image gallery! Here you can explore a collection of beautiful photos. Click on any image to see more details.</p>
    </div>
);

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Gallery />} />
                <Route path="/image/:id" element={<ImageView />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
