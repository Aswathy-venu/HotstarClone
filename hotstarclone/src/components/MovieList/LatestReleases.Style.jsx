import styled from 'styled-components';

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
top: 55%;
z-index: 2;
button.left{
  transform: translateY(-50%);
  cursor:pointer;
  color:white;
  font-size: 24px;
  font-weight: bold;
  background:none;
  border:none;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)); 
  height:210px;
  margin-left: 4px;
  margin-top:10px;
}
button.right{
  transform: translateY(-50%);
  cursor:pointer;
  font-size: 24px;
  background:none;
  font-weight: bold;
  border:none;
  color:white;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)); 
  margin-left:1120px;
  margin-top:10px;
} 
`;
export const LatestReleaseText = styled.h2`
  text-align: left;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const ImageCard = styled.div`
  position: relative;
  top: -110px;
  left: 8%;
  z-index: 2;
`;
export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 8850px;
`;
export const Card = styled.div`
  position: relative;
  width: 155px;
  height: 210px;
  margin: 4px;
  
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.7);
    z-index: 3;
    
    img{
    height  : 72%;
    }


  }
  img {
    width: 100%; 
    height: 100%;
    border-radius:6px;
  
    
  }

`;
export const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
   background-color: black;    
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  border-bottom-right-radius: 6px; 
  border-bottom-left-radius: 6px; 
  ${Card}:hover & {
    opacity: 1; 
  
    
    

  p.label{
    font-size:9px;
    font-weight: bold;
    
  }
  p.description{
    font-size:9px;
    text-align: left;
    color:grey;
    margin-bottom:-7px;
  }
  button.subscribe{
    margin-left:-6px;
    padding: 7px 30px;
        font-size: 10px;
        font-weight: bold;
        color:black;
        background-color: white;
        border: none;
        border-radius: 4px;
        &:hover {
            transform: scale(1.02);
        }
  }
  button.plusbutton{
        padding:4px 8px;
        margin-left:3px;
        font-weight: bold; 
        color:white;
        background-color: transparent;
        border: none;
        border-radius: 4px;
        &:hover {
            transform: scale(1.02);
        }
  } 
  }
`;