// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './component/Gallery';
import ImageView from './component/ImageView';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Gallery />} />
                <Route path="/image/:id" element={<ImageView />} />
            </Routes>
        </Router>
    );
};

export default App;
