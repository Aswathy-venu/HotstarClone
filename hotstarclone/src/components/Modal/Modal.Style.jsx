import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 60%;
  height: 80%;
  max-height: 800px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: hidden;
  h2{
    margin-left: 300px;
    margin-top:-10px;
  }
  span{
    margin-left: 700px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to new line */
  justify-content: flex-start; /* Distribute items evenly */
  flex-direction: row;
  overflow-y: auto;
  height: calc(100% - 40px);
  padding-left: 45px;
`;

export const Image = styled.div`
  margin-top: 10px;
  padding: 5px;
  box-sizing: border-box; 
  width:200px;
  /* Include padding in width calculation */
  img {
    width: 100%; /* Make the image fill its container */
    height: auto; /* Preserve aspect ratio */
  }
`;
export const BackGround = styled.div`
    position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: hidden;
`;