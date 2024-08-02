// src/components/Gallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20')
            .then(response => {
                setImages(response.data.photos);
            })
            .catch(error => {
                setError('Failed to fetch images');
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="gallery">
            {images.map(image => (
                <Link to={`/image/${image.id}`} key={image.id}>
                    <img src={image.url} alt={image.title} />
                </Link>
            ))}
        </div>
    );
};

export default Gallery;
