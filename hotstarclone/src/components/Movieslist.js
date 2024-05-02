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
      <LatestReleaseText>Latest Releases</LatestReleaseText>
      <ButtonContainer>
        <button  className="left" onClick={handleLeftButtonClick}>{"<"}</button>
        <button className="right" onClick={handleRightButtonClick}>{">"}</button>
      </ButtonContainer>
      <MySlider {...settings} ref={sliderRef}>
        {imageUrls.slice(0, 12).map((imageUrl, index) => ( 
          <Card key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
            {hoveredIndex === index + scrollPosition && (
        <Overlay>
          <button className="subscribe">&#9654;&nbsp;&nbsp;Subscribe To Watch</button>
          <button className="plusbutton">&#43;</button> 
          <h4>Science Fiction <span>&#124;</span> Action <span>&#124;</span> Adventure <span>&#124;</span> Fantasy </h4>
          <a href="/">Set more than a decade after the first film, dive into the story of<br></br>
                        the Sully family0; the lengths they go to keep each other safe<br></br>
                        and the tragedies they endure.</a>        
        </Overlay>
      )}
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

const LatestReleaseText = styled.h2`
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
    transition: 1s;
  }
  &:hover {
          transform:scale(1.3);
          z-index:7889;
           }
`;

export default Movielist;