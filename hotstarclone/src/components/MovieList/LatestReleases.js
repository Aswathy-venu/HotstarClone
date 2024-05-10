


import * as Elements from './LatestReleases.Style'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { fetchData } from '../../api/MovieCards'
import { IoMdStar } from "react-icons/io";

const LatestReleases = (props) => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [starColors, setStarColors] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // State to store the selected movie
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close

  useEffect(() => {
    fetchData().then((result) => (setMovies(result)));
  }, []);

  useEffect(() => {
    // Initialize star colors for each movie
    setStarColors(new Array(movies.length).fill('black'));
  }, [movies]);

  const nextSlide = () => {
    const newIndex = (index + 4) % movies.length;
    setIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (index - 4 + movies.length) % movies.length;
    setIndex(newIndex);
  };

  const handleStarClick = (clickedIndex) => {
    // Store the details of the selected movie
    setSelectedMovie(movies[index + clickedIndex]);
    // Toggle modal window open
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close the modal window
    setIsModalOpen(false);
  };

  return (
    <Elements.ImageCard>
    <Elements.LatestReleaseText>Latest Releases</Elements.LatestReleaseText>
    <Elements.ButtonContainer>
      <button className="left" onClick={prevSlide}>
        {'<'}
      </button>
      <button className="right" onClick={nextSlide}>
        {'>'}
      </button>
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
              onClick={() => handleStarClick(movieIndex)}
              style={{ color: starColors[index + movieIndex] }}
            >
              <IoMdStar />
            </button>
            <p className="label">
              2022 <span>&#9679;</span> 3h 12m <span>&#9679;</span> 6 Languages <span>&#9679;</span>
            </p>
            <p className="description">
              Set more than a decade after the first film, dive into the story of the Sully family0; the lengths
              they go to keep each other safe and the tragedies they endure.
            </p>
          </Elements.Description>
        </Elements.Card>
      ))}
    </Elements.MovieContainer>
    {/* Render modal window */}
    {isModalOpen && selectedMovie && (
      <Elements.ModalOverlay>
        <Elements.ModalContent>
          <Elements.CloseButton onClick={closeModal}>&times;</Elements.CloseButton>
          <h2>{selectedMovie.title}</h2>
          <img src={selectedMovie.posterURL} alt={`Movie Poster`} />
          <p>{selectedMovie.description}</p>
          {/* Add more movie details as needed */}
        </Elements.ModalContent>
      </Elements.ModalOverlay>
    )}
  </Elements.ImageCard>
  );
};

export default LatestReleases;



