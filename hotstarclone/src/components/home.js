import styled from "styled-components";
import bgVideo from "../media/video1.mp4";
import avatar from "../media/avatar.webp";
import release from '../media/New_Release.webp';
const Login = (props) => {
    return (
        <Container>
            <Content>
                <Image>
                    <img src={avatar} alt="avantar" />
                    <img src={release} alt="avantar" />
                    
                    <p>2022 <span>&#9679;</span> 3h 12m <span>&#9679;</span> 6 Languages <span>&#9679;</span> <button>U/A 13+</button></p>
                    
                    <a>Set more than a decade after the first film, dive into the story of<br></br>
                        the Sully family; the lengths they go to keep each other safe<br></br>
                        and the tragedies they endure.</a>
                    <h4>Science Fiction <span>&#124;</span> Action <span>&#124;</span> Adventure <span>&#124;</span> Fantasy </h4>
                    <StyledButton>
                    <button>&#9654;&nbsp;&nbsp;Subscribe To Watch</button>
                    <button>&#43;</button>
                    </StyledButton>
                </Image>
                <Video>
                    <video src={bgVideo} autoPlay loop muted>
                    </video>
                </Video>
            </Content>
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
const StyledButton = styled.div`
    button:first-child{ 
        padding: 11px 90px;
        font-size: 19px;
        font-weight: bold;
        color:rgb(252, 246, 246);
        background-color: rgba(250, 247, 251, 0.2);
        border: none;
        border-radius: 9px;
        transition: background-color 0.3s;
        margin-right: 80px;
        margin-top: 25px;  
    }
    button:last-child{ 
        padding: 11px 11px;
        font-size: 19px;
        font-weight: bold;
        color:rgb(252, 246, 246);
        background-color: rgba(250, 247, 251, 0.2);
        border: none;
        border-radius: 5px;
        transition: background-color 0.3s;
        margin-right: 80px;
        margin-top: 25px;  
    }
`;
const Image = styled.div`
    margin-right:500px;
    margin-bottom: 150px;
    img:first-child{
        width:500px; 
        margin-right:60px;
        margin-top:90px;
    }
    img:last-child{
        width:4px;
    }
    p{
         position: relative;
         top: 20px;
         right:100px;
         font-weight: bold;
        span{
            font-size:8px;
            color:grey;
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
         top: 20px;
         right:100px;
        span{
            font-size:16px;
            color:grey;
            font-weight:lighter;
        }
        
    }
   
    a{
        display:flex;
        font-size:18px;
        margin-top:60px; 
        line-height: 23px;
        text-align: left;
        margin-left:80px;
        color:grey;
        padding-bottom:20px;
    }
    /* button{ 
        padding: 11px 90px;
        font-size: 19px;
        font-weight: bold;
        color:rgb(252, 246, 246);
        background-color: rgba(250, 247, 251, 0.2);
        border: none;
        border-radius: 9px;
        transition: background-color 0.3s;
        margin-right: 80px;
        margin-top: 25px;  
    } */
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
         filter : brightness(0.7); 
    }
`;

export default Login;