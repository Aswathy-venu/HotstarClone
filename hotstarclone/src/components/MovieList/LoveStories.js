import React, { useEffect, useState } from 'react'
import { loveStories } from '../../api/MovieCards'
import * as Elements from './LoveStories.Style'

const LoveStories = (props) => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    loveStories().then((result) => (setMovies(result)));
    console.log(movies);
  },
    []);
  const nextSlide = () => {
    const newIndex = (index + 4) % movies.length;
    setIndex(newIndex);
  };
  const prevSlide = () => {
    const newIndex = (index - 4 + movies.length) % movies.length;
    setIndex(newIndex);
  };

  return (
    <Elements.ImageCard>
      <Elements.LatestReleaseText>Love Stories</Elements.LatestReleaseText>
      <Elements.ButtonContainer>
        <button className="left" onClick={prevSlide}>{"<"}</button>
        <button className="right" onClick={nextSlide}>{">"}</button>
      </Elements.ButtonContainer>
      <Elements.MovieContainer>
        {movies.slice(index, index + 8).map((movie, index) => (
          <Elements.Card key={index}>
            <img src={movie.posterURL} alt={`Movie ${index + 1}`} />
            <Elements.Description>
              <button className="subscribe">Watch Now</button>
              <button className="plusbutton">&#43;</button>
              <p className='label'>2022 <span>&#9679;</span> 3h 12m <span>&#9679;</span> 6 Languages <span>&#9679;</span></p>
              <p className='description'>Set more than a decade after the first film, dive into the story of
                the Sully family0; the lengths they go to keep each other safe
                and the tragedies they endure.</p>
            </Elements.Description>
          </Elements.Card>
        ))}
      </Elements.MovieContainer>
    </Elements.ImageCard>
  );
};
export default LoveStories;

