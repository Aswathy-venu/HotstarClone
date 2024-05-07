import React, { useState } from 'react';
import * as Element from '../Navbar/Navbar.Style.jsx';
import Logo from '../../media/logo.webp';
import Account from '../../media/account.svg';
import Home from '../../media/home.svg';
import Search from '../../media/icon1.svg';
import Tv from '../../media/tv.svg';
import Movie from '../../media/movie.svg';
import Sports from '../../media/sports.svg';
import Category from '../../media/category.svg';

const Navbar = (props) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

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
            </Element.NavMenu>
        </Element.Nav>
    );
};

export default Navbar;
