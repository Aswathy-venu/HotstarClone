import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Movielist = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 6,
    variableWidth: true,
    
  };

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
      <LatestReleaseText>Latest Releases</LatestReleaseText>
      <MySlider {...settings}>
        {imageUrls.slice(0, 12).map((imageUrl, index) => ( 
          <Card key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </Card>
        ))}
      </MySlider>
    </ImageCard> 
  );
};

const MySlider = styled(Slider)`
  position: relative;
  
`;
const LatestReleaseText = styled.h2`
  text-align: left;
  margin-bottom: 5px;
  font-size: 20px;
 
`;

const ImageCard = styled.div`
  position: relative;
  top: -100px;
  left: 10%;
  overflow:hidden; 
  width: 90%;
  overflow-x: hidden;
  
`;

const Card = styled.div`
  img {
    width: 150px; 
    height: 210px; 
    margin: 4px;
  
  }
`;

export default Movielist;
