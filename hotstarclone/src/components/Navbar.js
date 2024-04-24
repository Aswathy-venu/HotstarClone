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
    return(
    <Nav>
        <Logo>
            <img src={logo} alt="Disney+" />
            <button type="button">Subscribe</button>
        </Logo>
        
        
       
    
        <NavMenu>
            <img src={account} alt="account"></img>
            <img src={search} alt="search"></img>
            <img src={home} alt="home"></img> 
            <img src={tv} alt="tv"></img>
            <img src={movie} alt="movie"></img>
            <img src={sports} alt="sports"></img>
            <img src={category} alt="category"></img>
        </NavMenu>
        <Content>
            <span>My Space</span>
            <span>Search</span>
            <span>Home</span>
            <span>TV</span>
            <span>Movies</span>
            <span>Sports</span>
            <span>Categories</span>
        </Content>
    </Nav>
    );
};

const Nav = styled.nav`
    width: 7rem;
    height:100%;
    background-color:black;
    position: fixed;
    align-items: center;
    z-index:3; 
    box-shadow:100px 800px -800px 800px red;
`;

const Logo = styled.div`
    margin-top:28px;
    margin-left:30px;
    img{
        display:block;
        width:55px;
        margin-left:-10px;   

    }   
    button{
        margin-top:10px;
        margin-left:-20px;
        border-radius: 20px; 
        border:0px;
        color: #F4BB44;
        width:85px; 
        height:25px;
        background-color:#282722;
    }
`;


const NavMenu = styled.div`
    margin-top:50px;
    display:flex;
    flex-direction:column;
    img{
        width:65px;
        padding-bottom:40px;
        padding-left:45px;
        cursor: pointer;
    }
    &:hover + ${Content} {
        visibility: visible; 
}
`;

const Content = styled.div`
    margin-top:-455px; 
    margin-left:120px;
    width: 150px;
    span{
        display: flex;
        flex-direction:column;
        padding-top:40px;
        margin-right:40px;  
        visibility: hidden;
    }
    `;


export default Navbar;