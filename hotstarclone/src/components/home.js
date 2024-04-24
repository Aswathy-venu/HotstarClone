import styled from "styled-components";
import bgVideo from "../media/video1.mp4";
import avantar from "../media/avantar.webp";
const Login = (props) => {
  return (
    <Container>
        <Content>
        <Image>
             <img src={avantar} alt="avantar" />
             <span>Former Marine Jake Sully is deployed as an Avantar on a mission
                   to Pandora but,he ultimately finds himself torn between two
                   worlds</span>
            <button>&#9654;&nbsp;&nbsp;Subscribe To Watch</button>
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
const Image = styled.div `
    

    margin-right:500px;
    margin-bottom: 200px;
    img{
        width:400px;
    }
    span{
        display:flex;
    }
    button{
        
  padding: 11px 90px;
  font-size: 19px;
  font-weight: bold;
  color:rgb(252, 246, 246);
  background-color: rgba(250, 247, 251, 0.2);
  border: none;
  border-radius: 9px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 80px;
  margin-top: 25px;
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
        filter : brightness(0.4);
    }
    `;

export default Login;