import styled from "styled-components";

export const Length = styled.div`
    height:1200px;
    overflow-x: hidden;
    overflow-y:hidden;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;  
    height: 100vh;   
`;

export const Content = styled.div`
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
    padding: 80px 40px;
`;

export const Image = styled.div`
    margin-right:500px;

    h2{
        font-size: 60px;
        width:90%; 
        margin-top:10%;  
        margin-left:30px; 
        text-align: left;
    }
    p{
        position: relative;
        top:-10%;
        margin-left: 140px;
        right:100px;
        font-weight: bold;
        color:rgb(255, 250, 250);

    

        span{
            margin-left:3px;
            font-size:3px;
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
        margin-right: 80px;
        margin-top: 25px;    
        }
    }
   
    h4{
        position: relative;
        left:-10%;
        right:100px;
        top:-20px;
        color:rgb(255, 255, 255);

        
        span{
            font-size:16px;
            color:RGB(179, 179, 179);
            font-weight:lighter;
            color:RGB(179, 179, 179);
        }  
    }
   
    a{
        display:flex;
        font-size:15px;
        margin-top:-10%; 
        line-height: 23px;
        text-align: left;
        margin-left:7%;
        color:rgb(255, 251, 251);
        padding-bottom:20px;

    }

    button.subscribe{ 
        padding: 13px 60px;
        font-size: 19px;
        font-weight: bold;
        color:rgb(7, 1, 1);
        background-color: rgb(250, 247, 251);
        border: none;
        border-radius: 9px;
        margin-bottom: 10%; 
        margin-left: -14%;
        padding-top: 10px;
        padding-bottom: 10px;

        
    }
    
    button.plusbutton{ 
        padding: 4px 15px;
        font-size: 30px;
        color:rgb(252, 246, 246);
        background-color: rgba(69, 68, 70, 0.596);
        border: none;
        border-radius: 5px;
        padding-top: -2px;
        bottom:-5px;
        position: relative;
        margin-left:5px;
        margin-top:10px;
    }
`;

export const FadeBottom = styled.div`
    height:87.4rem;
    background-image:linear-gradient(rgb(19,18,18),rgb(0,0,0));
    position: relative;
    bottom:85px;
`;

export const Fade = styled.div`
    height: 1.4rem;
    background-image: linear-gradient(180deg,transparent,rgba(37,37,37,.61),#111);
    position: relative;
    bottom: 85px;
`;

export const Video = styled.div`
    background-position:top;
    background-size : cover; 
    position: fixed; 
    top:0;
    right:0;
    left:0; 
    z-index : -1;

`;
export const Picture = styled.div`
    width:100vw;
    height: 100vh;

img{
   
    width:100%;
    height: 100%;
    object-fit: fill;
    
}
`;
export const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)); 
    z-index: 1;
`;

export const Gradient = styled.div`
    position: absolute;
    top: 80%;
    left: 0;
     width:100%; 
    height: 60%; 
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
    z-index: 1;
`;


export const MoreLike = styled.div`
  margin-top:-11px;
    z-index:15;
    bottom:30px;
    margin-top: 30px;
    z-index: 15;
    position: relative;
    top: -30px; 
    span.morelike{
        font-size: 20px;
        margin-left:-590px;
        
    }
    span.trailers {
        font-size: 20px;
        margin-left: 90px;
    }
`;



export const LineUnderMoreLike = styled.div`
  border-bottom: 2px solid #ccc;
  width: 100%;
  margin-top: 1px; 
  margin-left:160px;
`;

export const Card = styled.div`
   margin-top:90px;
   margin-left:60px;
`;
