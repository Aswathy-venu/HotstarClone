import styled from "styled-components";
import bgVideo from "../media/video1.mp4";
import avatar from "../media/avatar.webp";
import FilmCards from "./Movieslist.js";

import release from '../media/New_Release.webp';
const Home = (props) => {
    return(
        <Container>
            <Content>
                <Image>
                  <img src={avatar} alt="avantar" className="avatar"/>
                    <img src={release} alt="release" className="release"/>
                    <p>2022 <span>&#9679;</span> 3h 12m <span>&#9679;</span> 6 Languages <span>&#9679;</span> <button>U/A 13+</button></p>
                    <a href="/">Set more than a decade after the first film, dive into the story of<br></br>
                        the Sully family; the lengths they go to keep each other safe<br></br>
                        and the tragedies they endure.</a>
                    <h4>Science Fiction <span>&#124;</span> Action <span>&#124;</span> Adventure <span>&#124;</span> Fantasy </h4>
                    <button className="subscribe">&#9654;&nbsp;&nbsp;Subscribe To Watch</button>
                    <button className="plusbutton">&#43;</button> 
                </Image>
                <Video>
                <GradientOverlay />
                <Gradient />
                    <video src={bgVideo} autoPlay loop muted>
                    </video>
                </Video>
                
            </Content>
            <FilmCards />
        </Container>
    );
};



const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;  
    height: 100vh;   
    
`;
const Image = styled.div`

    margin-right:500px;
    
    img.avatar{
        width:53%; 
        margin-right:35%;
        margin-top:12%;
        
    }
    img.release{
        width:14%;
        margin-top:1%;
        margin-right: 73%;
       
    }
    p{
         position: relative;
         top:-6%;
         margin-left: -2%;
         right:100px;
         font-weight: bold;
         color:RGB(179, 179, 179);
         &:hover {
                color: white;
            }
        span{
            margin-left:1px;
            font-size:8px;
            color:RGB(179, 179, 179);
        }
        button{ 
        padding: 6px 12px;
        font-size: 15px;
        
        font-weight: bold;
        color:rgb(252, 246, 246);
        background-color: rgba(250, 247, 251, 0.2);
        border: none;
        border-radius: 7px;
        transition: background-color 0.3s;
        margin-right: 80px;
        margin-top: 25px;    
    }
    }
   
    h4{
         position: relative;
         top: -2%;
         left:-19%;
         right:100px;
         color:RGB(179, 179, 179);
         &:hover {
                color: white;
            }
        span{
            font-size:16px;
            color:RGB(179, 179, 179);
            font-weight:lighter;
            color:RGB(179, 179, 179);
        }
        
    }
   
    a{
        display:flex;
        font-size:18px;
        margin-top:-3%; 
        line-height: 23px;
        text-align: left;
        margin-left:6%;
        color:RGB(179, 179, 179);
        padding-bottom:20px;
        &:hover {
                color: white;
            }
    }

     button.subscribe{ 
        padding: 13px 90px;
        font-size: 19px;
        font-weight: bold;
        color:rgb(252, 246, 246);
        background-color: rgba(250, 247, 251, 0.2);
        border: none;
        border-radius: 9px;
        transition: background-color 0.3s;
        margin-right: 80px;
        margin-top: -12%;  
        margin-left: -22%;
        padding-top: 10px;
        transition: background-color 0.3s, transform 0.3s;
       
    }
    
    button.plusbutton{ 
        padding: 6px 15px;
        font-size: 30px;
        color:rgb(252, 246, 246);
        background-color: rgba(250, 247, 251, 0.2);
        border: none;
        border-radius: 5px;
        transition: background-color 0.3s;
        padding-top: -2px;
        bottom:-5px;
        position: relative;
        margin-left:-65px;
        margin-top:10px;
     }
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%; 
`;
const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)); 
    z-index: 1;
`;
const Gradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
    z-index: 1;
`;

const Video =styled.div`
    height :100%;
    background-position:top;
    background-size : cover;
    background-repeat: no-repeat;
    position: absolute;
    top:0;
    right:0;
    left:0;
    z-index : -1;
    
    video{
        width:100%; 
    }
`;



export default Home;