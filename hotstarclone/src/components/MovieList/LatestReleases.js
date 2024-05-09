import * as Elements from './LatestReleases.Style'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { fetchData } from '../../api/MovieCards'
import Favorite from '../../media/grade.svg'

const LatestReleases = (props) => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    fetchData().then((result) => (setMovies(result)));
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
      <Elements.LatestReleaseText>Latest Releases</Elements.LatestReleaseText>
      <Elements.ButtonContainer>
        <button className="left" onClick={prevSlide}>{"<"}</button>
        <button className="right" onClick={nextSlide}>{">"}</button>
      </Elements.ButtonContainer>
      <Elements.MovieContainer>
        {movies.slice(index, index + 8).map((movie, index) => (
          <Elements.Card key={index}>
            <img src={movie.posterURL} alt={`Movie ${index + 1}`} />
            <Elements.Description>
              <Link to={`/Detailed-Page/${movie.id}`}>
              <button className="subscribe">Watch Now</button>
              </Link>
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
export default LatestReleases;
