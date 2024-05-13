


import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favoritemovies, setFavoriteMovies] = useState([]);

  const incrementFavoritesCount = () => {
    setFavoritesCount(prevCount => prevCount + 1);
  };

  const decrementFavoritesCount = () => {
    setFavoritesCount(prevCount => Math.max(prevCount - 1, 0)); // Ensure count never goes below 0
  };

  return (
    <FavoritesContext.Provider value={{ favoritesCount, incrementFavoritesCount, decrementFavoritesCount ,favoritemovies,setFavoriteMovies}}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
