import React from "react";
import { useEffect, useState } from 'react';
import styled from "styled-components";

export default function Movielist() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/animation');
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
  <ImageCard>
    <CardContainer>
      {imageUrls.slice(0, 8).map((imageUrl, index) => ( 
        <Card key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`} className="image" />
        </Card>
      ))}
    </CardContainer> 
    
  </ImageCard>
 
);
}

const Card = styled.div`
   
    
    img{
      width: 160px; 
      height: 220px; 
      margin: 4px;
      /* background-color: black; */
    }
  `;
const ImageCard = styled.div`
  position: absolute; /* or 'fixed' if you want it to be fixed relative to the viewport */
  top: 570px; /* Adjust the top position as needed */
  left: 8%; /* Adjust the left position as needed */
  /* background-color: black; */
  `;
const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;
// import {useEffect, useState} from 'react';

// export default function App() {
//   const [data, setData] = useState("");
//   const getData = async () => {
//     const resp = await fetch('https://api.sampleapis.com/movies/animation');
//     const json = await resp.json();
//     setData(json);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <pre>
//       {JSON.stringify(data, null, 2)}
//     </pre>
//   )
// }

