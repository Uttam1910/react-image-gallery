// src/components/ImageView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ImageView = () => {
    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://api.slingacademy.com/v1/sample-data/photos`)
            .then(response => {
                setImage(response.data.photo);
            })
            .catch(error => {
                setError('Failed to fetch image details');
            });
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!image) {
        return <div>Loading...</div>;
    }

    return (
        <div className="image-view">
            <img src={image.url} alt={image.title} />
            <h1>{image.title}</h1>
            <p>{image.description}</p>
        </div>
    );
};

export default ImageView;
