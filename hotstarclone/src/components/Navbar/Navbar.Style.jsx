import styled from "styled-components";

export const Nav = styled.nav`
    width: 7rem;
    height: 100%;
    position: fixed;
    align-items: center;
    z-index: 10;

    &:hover { 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)); 
        z-index: 4;
        position: fixed;
    }
`;

export const Logo = styled.div`
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

export const NavMenu = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const NavItem = styled.div`
    width: 68px;
    position: relative;

    &:hover {
        transform: scale(1.2);

        img {
            filter: brightness(0) invert(1);
            fill: white;
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
        color: grey;   
        transition: left 0.5s ease;
        left: ${({ isContentVisible }) => (isContentVisible ? '0' : '-30%')};
        visibility: ${({ isContentVisible }) => (isContentVisible ? 'visible' : 'hidden')};
    }
`;

export const Count = styled.div`
    margin-left: 35px;
    margin-top: -29px;
`;
