import styled from "styled-components";
import logo from '../media/logo.webp';



const Navbar = (props) => {
    return <Nav>
   <Logo>
      <img src={logo} alt="Disney+" />
  </Logo>
  </Nav>
  
};

const Nav = styled.nav`
    top:0;
    left:0;
    right:0;
    width: 150px;
    height:100%;
    background-color: #090b13;
    display:flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;  
    z-index:3;
 `;

const Logo = styled.div`
    padding: 0;
    width: 80px;
    margin-bottom:550px;
    max-height:70px;
    font-size: 0;
    display: inline-block;

    img{
        display:block;
        width:100%;
    }
     
`;
export default Navbar;