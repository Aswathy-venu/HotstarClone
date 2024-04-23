import styled from "styled-components";
import bgVideo from "../media/video1.mp4";

const Login = (props) => {
  return (
    <Container>
        <Content>
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

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center 
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
    z-index = -1;
    display: flex;
    `;

export default Login;