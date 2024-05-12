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
  height:212px;
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
    margin-left:-10px;
    padding: 7px 15px;
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
        border: none;
        border-radius: 4px;
        &:hover {
            transform: scale(1.02);
        }
  } 

  button.gradebutton{
        padding:4px 8px;
        margin-left:3px;
        border: none;
        border-radius: 4px;
        &:hover {
            transform: scale(1.02);
        }
  } 
  }
`;




export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1; /* Ensure the modal is displayed on top of other content */
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 10px; /* Adjust padding as needed */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px; /* Decrease the max-width to limit the size of the modal */
`;

export const ImgCard = styled.div`
  position: relative;
  width: 120px; /* Decrease the width of the card */
  height: 160px; /* Decrease the height of the card */
  margin: 4px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.7);
    z-index: 3;
    img {
      height: 32%;
      width:30px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 150px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #555;
`;

export const CardContainer = styled.div`
  display: flex; 
   flex-wrap: raw;
  /* justify-content: space-around; */
`;

export const CardImage = styled.img`
  width:4%;
  height: auto;
  border-radius: 4px;
`;

