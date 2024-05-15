import React, { useState,useContext} from 'react';

import * as Element from './Navbar.Style';
import Modal from '../Modal/Modal.js'
import Logo from '../../media/logo.webp';
import Account from '../../media/account.svg';
import Home from '../../media/home.svg';
import Search from '../../media/icon1.svg';
import Tv from '../../media/tv.svg';
import Movie from '../../media/movie.svg';
import Sports from '../../media/sports.svg';
import Category from '../../media/category.svg';
import Favorites from '../../media/favorite.svg';
import { FavoritesContext } from '../MovieList/FavoritesContext.js';


const Navbar = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const { favoritesCount, favoritemovies } = useContext(FavoritesContext);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    console.log("Modal opened");
  };
  
  return (
    <Element.Nav>
      <Element.Logo>
        <img src={Logo} alt="Disney+" />
        <button type="button">Subscribe &gt;</button>
      </Element.Logo>
      <Element.NavMenu onMouseEnter={() => setIsContentVisible(true)} onMouseLeave={() => setIsContentVisible(false)}>
        <Element.NavItem isContentVisible={isContentVisible}>
          <img src={Account} alt="account" />
          <span>My Space</span>
        </Element.NavItem>
        <Element.NavItem isContentVisible={isContentVisible}>
          <img src={Search} alt="search" />
          <span>Search</span>
        </Element.NavItem>
        <Element.NavItem isContentVisible={isContentVisible}>
          <img className='home' src={Home} alt="home" />
          <span className='home'>Home</span>
        </Element.NavItem>
        <Element.NavItem isContentVisible={isContentVisible}>
          <img src={Tv} alt="tv" />
          <span>TV</span>
        </Element.NavItem>
        <Element.NavItem isContentVisible={isContentVisible}>
          <img src={Movie} alt="movie" />
          <span>Movies</span>
        </Element.NavItem>
        <Element.NavItem isContentVisible={isContentVisible}>
          <img src={Sports} alt="sports" />
          <span>Sports</span>
        </Element.NavItem>
        <Element.NavItem isContentVisible={isContentVisible}>
          <img src={Category} alt="category" />
          <span>Categories</span>
        </Element.NavItem>
        <Element.NavItem isContentVisible={isContentVisible} onClick={handleOpenModal}>
          <img src={Favorites} alt="Favorites" />
          <Element.Count>{favoritesCount}</Element.Count>
          <span>Favorites</span>
        </Element.NavItem>
        
          <Modal open={showModal} close={()=>setShowModal(false)}/>
        
        
      </Element.NavMenu>
    </Element.Nav>
  );
};

export default Navbar;
