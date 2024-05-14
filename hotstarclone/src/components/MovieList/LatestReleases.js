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
  const {incrementFavoritesCount, decrementFavoritesCount } = useContext(FavoritesContext);
  const {favoritemovies, setFavoriteMovies} = useContext(FavoritesContext);


  useEffect(() => {
    fetchData().then((result) => setMovies(result));
  },[]);

  useEffect(() => {
    setStarColors(new Array(movies.length).fill('black'));
  },[movies]);

  const nextSlide = () => {
    const newIndex = (index + 8) % movies.length;
    setIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (index - 8 + movies.length) % movies.length;
    setIndex(newIndex);
  };

  const handleStarClick = (clickedIndex, movie) => {
    const updatedStarColors = [...starColors];
    const isFavorite = updatedStarColors[clickedIndex] === 'yellow';
    
    if (isFavorite) {
    
        decrementFavoritesCount(); 
        setFavoriteMovies(prevMovies => prevMovies.filter(fav => fav.id !== movie.id));
    } else {
 
        incrementFavoritesCount();
        setFavoriteMovies(prevMovies => [...prevMovies, movie]);
    }
  
    updatedStarColors[clickedIndex] = isFavorite ? 'black' : 'yellow';
    setStarColors(updatedStarColors);
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
                onClick={() => handleStarClick(index + movieIndex, movie)}
                style={{ color: starColors[index + movieIndex] }}>
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
