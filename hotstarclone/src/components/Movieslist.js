import React from "react";
import { useEffect, useState,useRef } from 'react';
import styled from "styled-components";

const Movielist = (props) => {
const [imageUrls, setImageUrls] = useState([]);
const carouselRef = useRef(null);

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

  const scroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };
return (
{/* <>
  <Heading>
        <span>Latest Releases</span>
      </Heading>
      </> */}
  <ImageCard>
       
    <CardContainer>
      {imageUrls.slice(0, 9).map((imageUrl, index) => ( 
        <Card key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`}  />
        </Card>
      ))}
    <Button>
    <ScrollButton direction="left" onClick={() => scroll(-1000)}>{"<"}</ScrollButton>
      <ScrollButton direction="right" onClick={() => scroll(1000)}>{">"}</ScrollButton>
    
    </Button>
    </CardContainer> 
  </ImageCard>
  
  
);
};
const Button = styled.div`
  display: flex;
  overflow-x: hidden;
  margin-top: 8px; /* Adjust as needed */
`;
const ScrollButton = styled.button`
  position: absolute;
  background: linear-gradient(to right, black, transparent);
  color: white;
  font-weight: bold;
  padding: 6px 12px; /* Adjust padding as needed */
  border: none;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => (direction === 'left' ? 'left: 36px;' : 'right: 0;')}
`;
 
const Card = styled.div`
   
    
    img{
      width: 150px; 
      height: 210px; 
      margin: 4px;
    }
  `;
const ImageCard = styled.div`
  position: absolute;
  top: 560px;
  left: 8%;
  width: 84%; 
  overflow: hidden;
  `;
const CardContainer = styled.div`
    display: flex;
  `;
const Heading = styled.div`

  span{
  font-size: 20px;;
  margin-top:-20px;
  margin-left:3px;
}
`;

export default Movielist;