import React from "react";
import { useEffect, useState} from 'react';
import styled from "styled-components";

const Movielist = (props) => {
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
 
  
  <ImageCard>
   <Div>
    <span>Nerwhvsmxnk</span>
    </Div>
    <CardContainer>
    
      {imageUrls.slice(0, 9).map((imageUrl, index) => ( 
        <Card key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`}  />
        </Card>
      ))}
    {/* <Button>
    <ScrollButton direction="left" onClick={() => scroll(-1000)}>{"<"}</ScrollButton>
    <ScrollButton direction="right" onClick={() => scroll(1000)}>{">"}</ScrollButton>
    </Button> */}
     
    </CardContainer> 
   
  </ImageCard>

  
  
);
};

 
const Card = styled.div`
    img{
      width: 150px; 
      height: 210px; 
      margin: 4px;
    }
  `;
const ImageCard = styled.div`
  position: absolute;
  top: 570px;
  left: 8%;
  width: 84%; 
  overflow: hidden;
  `;
const CardContainer = styled.div`
    display: flex; 
  `;
const Div = styled.div`
  span{
    color: white;
    position: absolute; 
    left: 1px;
    top:px;
    font-weight: bolder;
    font-size: 20px;
}
`;

export default Movielist;