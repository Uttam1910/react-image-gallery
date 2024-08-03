import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './ImageView.css';

const ImageView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
      .then(response => {
        setImageData(response.data.photo); // Ensure you access the correct field
      })
      .catch(error => {
        console.error('Error fetching image data:', error);
      });
  }, [id]);

  if (!imageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="image-view-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back to Gallery</button>
      <div className="image-view-content">
        <img src={imageData.url} alt={imageData.title} className="image-view-image" />
        <div className="image-view-info">
          <h2 className="image-view-title">{imageData.title}</h2>
          <p className="image-view-description">{imageData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
