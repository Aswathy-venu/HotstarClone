import React, { useState } from 'react';
import styled from "styled-components";
import logo from '../media/logo.webp';
import account from '../media/account.svg';
import home from '../media/home.svg';
import search from '../media/icon1.svg';
import tv from '../media/tv.svg';
import movie from '../media/movie.svg';
import sports from '../media/sports.svg';
import category from '../media/category.svg';

const Navbar = (props) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    return (
        <Nav>
            <Logo>
                <img src={logo} alt="Disney+" />
                <button type="button">Subscribe &gt;</button>
            </Logo>
            <NavMenu onMouseEnter={() => setIsContentVisible(true)} onMouseLeave={() => setIsContentVisible(false)}>
                <NavItem>
                    <img src={account} alt="account" />
                    <span  style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>My Space</span>
                </NavItem>
                <NavItem>
                    <img src={search} alt="search" />
                    <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Search</span>
                </NavItem>
                <NavItem>
                    <img  src={home} alt="home" />
                    <span  style={{ color:'white', left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Home</span>
                </NavItem>
                <NavItem>
                    <img src={tv} alt="tv" />
                    <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>TV</span>
                </NavItem>
                <NavItem>
                    <img src={movie} alt="movie" />
                    <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Movies</span>
                </NavItem>
                <NavItem>
                    <img src={sports} alt="sports" />
                    <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Sports</span>
                </NavItem>
                <NavItem>
                    <img src={category} alt="category" />
                    <span style={{ left: isContentVisible ? '0' : '-30%', visibility: isContentVisible ? 'visible' : 'hidden' }}>Categories</span>
                </NavItem>
            </NavMenu>
        </Nav>
    );
};

const Nav = styled.nav`
    width: 7rem;
    height: 100%;
    position: fixed;
    align-items: center;
    z-index: 3;
    &:hover { 
        background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 100%);
        }
`;


const Logo = styled.div`
    margin-top: 28px;
    margin-left: 30px;
    img {
        display: block;
        width: 55px;
        margin-left: -10px;
    }
    button {
        margin-top: 10px;
        margin-left: -20px;
        border-radius: 20px;
        border: 0px;
        color: #F4BB44;
        width: 85px;
        height: 25px;
        background-color: #282722;
    }
`;

const NavMenu = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    
`;

const NavItem = styled.div`
    width: 68px;
    position: relative;
    &:hover {
        transform: scale(1.2);
        img {
            filter: brightness(0) invert(1);
            fill:white;
        }
        span {
            color: white; 
        }
    }
    img {
        width: 52px;
        padding-bottom: 30px;
        padding-left: 30px;
        transition: transform 0.1s ease;  
       
    }
    span { 
        position: absolute;  
        width: 90px;
        margin-top: -55px;
        margin-left: 70px;
        display: flex;
        font-size: 18px;
        padding-bottom: 40px;
        transition: left 0.5s ease;
        color:grey;
        
    }
`;

export default Navbar;
