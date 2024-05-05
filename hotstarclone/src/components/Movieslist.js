import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Movielist = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/family');
        const data = await resp.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
 
  return (
    <ImageCard>
      <LatestReleaseText>Latest Releases</LatestReleaseText>
      <MovieContainer>
        {movies.slice(0,12).map((movie, index) => ( 
          <Card key={index}>
            <img src={movie.posterURL} alt={`Movie ${index + 1}`} />
            <Description>
              <button className="subscribe">Watch Now</button>
              <button className="plusbutton">&#43;</button> 
              <p>2022 <span>&#9679;</span> 3h 12m <span>&#9679;</span> 6 Languages <span>&#9679;</span></p>     
              <a href="/">Set more than a decade after the first film, dive into the story.</a>      
            </Description>
          </Card>
        ))}     
      </MovieContainer>
    </ImageCard> 
  );
};

const LatestReleaseText = styled.h2`
  text-align: left;
  margin-bottom: 5px;
  font-size: 20px;
`;

const ImageCard = styled.div`
  position: relative;
  top: -150px;
  left: 10%;
  z-index: 200;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 8850px;
`;

const Card = styled.div`
  position: relative;
  width: 150px;
  height: 210px;
  margin: 4px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.9);
    z-index: 1;
    img{
    height  : 72%;
    }
  }
  img {
    width: 100%; 
    height: 100%;
  }
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  
  ${Card}:hover & {
    opacity: 1;
   
    a{
    font-size:8px;
    line-height:-9;
  }
  p{
    font-size:8px;
    font-weight:bold;
  }
  }
`;



const Button = styled.button`
  background-color: rgba(250, 247, 251, 0.2);
  color:rgb(252, 246, 246);
  border: none;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  
`;

export default Movielist;
