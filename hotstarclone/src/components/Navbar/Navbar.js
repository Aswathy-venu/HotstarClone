import React, { useState,useContext } from 'react';
import { FavoritesContext } from '../MovieList/FavoritesContext.js'; 
import * as Element from './Navbar.Style';
import Logo from '../../media/logo.webp';
import Account from '../../media/account.svg';
import Home from '../../media/home.svg';
import Search from '../../media/icon1.svg';
import Tv from '../../media/tv.svg';
import Movie from '../../media/movie.svg';
import Sports from '../../media/sports.svg';
import Category from '../../media/category.svg';
import Favorites from '../../media/favorite.svg';
import * as Elements from '../../components/MovieList/LatestReleases.Style.jsx';


const Navbar = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const {favoritesCount} = useContext(FavoritesContext); // Access favorites count from context
  const [showModal, setShowModal] = useState(false);
  const {favoritemovies} = useContext(FavoritesContext);
  

  const handleOpenModal = () => {
    setShowModal(true);
    console.log("Modal opened");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log("Modal closed");
  };

  return (
    <Element.Nav>
      <Element.Logo>
        <img src={Logo} alt="Disney+" />
        <button type="button">Subscribe &gt;</button>
      </Element.Logo>
      <Element.NavMenu onMouseEnter={() => setIsContentVisible(true)} onMouseLeave={() => setIsContentVisible(false)}>
        <Element.NavItem>
          <img src={Account} alt="account" />
          <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>My Space</span>
        </Element.NavItem>
        <Element.NavItem>
          <img src={Search} alt="search" />
          <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Search</span>
        </Element.NavItem>
        <Element.NavItem>
          <img className='home' src={Home} alt="home" />
          <span className='home' style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Home</span>
        </Element.NavItem>
        <Element.NavItem>
          <img src={Tv} alt="tv" />
          <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>TV</span>
        </Element.NavItem>
        <Element.NavItem>
          <img src={Movie} alt="movie" />
          <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Movies</span>
        </Element.NavItem>
        <Element.NavItem>
          <img src={Sports} alt="sports" />
          <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Sports</span>
        </Element.NavItem>
        <Element.NavItem>
          <img src={Category} alt="category" />
          <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Categories</span>
        </Element.NavItem>
        <Element.NavItem onClick={handleOpenModal}>
          <img src={Favorites} alt="Favorites" />
          <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Favorites ({favoritesCount})</span>
        </Element.NavItem>
        {showModal && (
        <Elements.Modal style={{width:'50%' ,height:'70%', marginLeft: '-50px' , marginTop:'-50px'}}>
          <Elements.ModalContent>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2 className='favotites-head'>Favotites</h2>

            {favoritemovies.map((movie, index) => (
              
              <div key={index} >
                  <div key={index} style={{width:'50%' ,height:'50%', border:'3px solid black'}}>
                    <img src={movie.posterURL} alt=""/>
                  </div>
              </div>
            ))}
          </Elements.ModalContent>
        </Elements.Modal>
      )} 
      </Element.NavMenu>
    </Element.Nav>
  );
};

export default Navbar;
