import React from "react";
import { useEffect, useState } from 'react';

export default function Movielist() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/family');
        const data = await resp.json();
        const urls = data.map(movie => movie.posterURL);
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


return (
  <div className="image-card-scroll-container">
    <div className="image-card-container">
      {imageUrls.slice(0, 8).map((imageUrl, index) => ( 
        <div className="image-card" key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`} className="image" />
        </div>
      ))}
    </div>
    
  </div>
 
);
}
