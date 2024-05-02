import React, { useEffect, useState,useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Movielist = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
    
  };

  const [imageUrls, setImageUrls] = useState([]);
  const sliderRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/drama');
        const data = await resp.json();
        const urls = data.map(movie => movie.posterURL);
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleLeftButtonClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleRightButtonClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <ImageCard>
      <PopularMovieText>Popular Movies</PopularMovieText>
      
      <ButtonContainer>
        <button  className="left" onClick={handleLeftButtonClick}>{"<"}</button>
        <button className="right" onClick={handleRightButtonClick}>{">"}</button>
      </ButtonContainer>

      <MySlider {...settings} ref={sliderRef}>
        {imageUrls.slice(0, 12).map((imageUrl, index) => ( 
          <Card key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </Card>
        ))}
      </MySlider>
 
    </ImageCard> 
  );
};


const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  z-index: 1000; 
  button.left {
    transform: translateY(-50%); 
    color: white;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }
  button.right {
    transform: translateY(-50%); 
    color: white;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    margin-left:1100px;
  }
`;

const MySlider = styled(Slider)`
  position: relative;
  
  
`;
const PopularMovieText = styled.h2`
  text-align: left;
  margin-bottom: 5px;
  font-size: 20px;
 
`;

const ImageCard = styled.div`
  position: relative;
  top: -430px;
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
