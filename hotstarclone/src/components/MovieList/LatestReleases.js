import React, {useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../api/MovieCards';
import { FavoritesContext } from '../MovieList/FavoritesContext.js';
import { IoMdStar } from "react-icons/io";
import * as Elements from './LatestReleases.Style';


const LatestReleases = (props) => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [starColors, setStarColors] = useState([]);
  const { incrementFavoritesCount, decrementFavoritesCount } = useContext(FavoritesContext);

    const {favoritemovies, setFavoriteMovies} = useContext(FavoritesContext);


  useEffect(() => {
    fetchData().then((result) => setMovies(result));
    console.log("fav movies",favoritemovies)
  }, [favoritemovies]);

  useEffect(() => {
    setStarColors(new Array(movies.length).fill('black'));
  }, [movies]);

  const handleStarClick = (clickedIndex,movie) => {
    const updatedStarColors = [...starColors];
    if (updatedStarColors[clickedIndex] === 'yellow') {
      updatedStarColors[clickedIndex] = 'black'; 
      // Unstarred, so set color back to black
      decrementFavoritesCount(); // Decrement favorites count when a movie is removed from favorites
      setFavoriteMovies(favoritemovies => favoritemovies.filter((fav) => fav.id !== movie.id)
    );

    } else {
      updatedStarColors[clickedIndex] = 'yellow'; // Starred, so set color to yellow
      incrementFavoritesCount(); // Increment favorites count when a movie is added to favorites
      setFavoriteMovies((prevMovies) => [...prevMovies,movie]);
    setStarColors(updatedStarColors);
  };


  }

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
        <button className="left" onClick={prevSlide}>{'<'}</button>
        <button className="right" onClick={nextSlide}>{'>'}</button>
      </Elements.ButtonContainer>
      <Elements.MovieContainer>
        {movies.slice(index, index + 8).map((movie, movieIndex) => (
          <Elements.Card key={movieIndex}>
            <img src={movie.posterURL} alt={`Movie ${movieIndex + 1}`} />
            <Elements.Description>
              <Link to={`/Detailed-Page/${movie.id}`}>
                <button className="subscribe">Watch Now</button>
              </Link>
              <button className="plusbutton">&#43;</button>
              <button
                className="gradebutton"
                onClick={() => handleStarClick(index + movieIndex,movie)}
                style={{ color: starColors[index + movieIndex] }}
              >
                <IoMdStar />
              </button>
              <p className="label">2022 <span>&#9679;</span> 3h 12m <span>&#9679;</span> 6 Languages <span>&#9679;</span></p>
              <p className="description">Set more than a decade after the first film, dive into the story of the Sully family0; the lengths they go to keep each other safe and the tragedies they endure.</p>
            </Elements.Description>
          </Elements.Card>
        ))}
      </Elements.MovieContainer>
   
    </Elements.ImageCard>
  );
};

export default LatestReleases;
