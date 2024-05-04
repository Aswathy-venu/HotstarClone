import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Movielist = (props) => {
  const [movies, setMovies] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
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
              <Title>{movie.title}</Title>
              <Button>Watch Now</Button>
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
  top: -430px;
  left: 10%;
   overflow: hidden; 
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  position: relative;
  width: 150px;
  height: 210px;
  margin: 4px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.5);
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
  }
`;

const Title = styled.h3`
  margin: 0;
  color: #fff;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #ff5722;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #e64a19;
  }
`;

export default Movielist;

