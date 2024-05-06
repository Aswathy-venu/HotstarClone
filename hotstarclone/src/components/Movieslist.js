import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Movielist = (props) => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/family');
        const data = await resp.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  const nextSlide = () => {
    const newIndex = (index + 4) % movies.length;
    setIndex(newIndex);
  };
  const prevSlide = () => {
    const newIndex = (index - 4 + movies.length) % movies.length;
    setIndex(newIndex);
  };
  
  return (
    <ImageCard>
      <LatestReleaseText>Latest Releases</LatestReleaseText>
      <ButtonContainer>
        <button className="left" onClick={prevSlide}>{"<"}</button>
        <button className="right" onClick={nextSlide}>{">"}</button>
      </ButtonContainer>
      <MovieContainer>
      {movies.slice(index,index+8).map((movie, index) => (
          <Card key={index}>
            <img src={movie.posterURL} alt={`Movie ${index + 1}`} />
            <Description>
              <button className="subscribe">Watch Now</button>
              <button className="plusbutton">&#43;</button> 
              <p className='label'>2022 <span>&#9679;</span> 3h 12m <span>&#9679;</span> 6 Languages <span>&#9679;</span></p>     
              <p className='description'>Set more than a decade after the first film, dive into the story of
                        the Sully family0; the lengths they go to keep each other safe
                        and the tragedies they endure.</p>
                   </Description>
          </Card>
        ))}     
      </MovieContainer>
    </ImageCard> 
  );
};

const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
top: 55%;
z-index: 2;
button.left{
  transform: translateY(-50%);
  cursor:pointer;
  color:red;
  font-size: 24px;
  font-weight: bold;
  background:none;
  border:none;
}
button.right{
  transform: translateY(-50%);
  cursor:pointer;
  font-size: 24px;
  background:none;
  font-weight: bold;
  border:none;
  color:red;
  margin-left:1120px;
} 
`;
const LatestReleaseText = styled.h2`
  text-align: left;
  margin-bottom: 5px;
  font-size: 20px;
`;

const ImageCard = styled.div`
  position: relative;
  top: -130px;
  left: 8%;
  z-index: 200;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 8850px;
`;

const Card = styled.div`
  position: relative;
  width: 155px;
  height: 210px;
  margin: 4px;
  
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.7);
    z-index: 1;
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

const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  
  transition: opacity 0.3s ease-in-out;
  
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
    margin-left:-12px;
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
    margin-left:-12px;
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
  }
`;





export default Movielist;





// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

// const Movielist = (props) => {
//   const [movies, setMovies] = useState([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resp = await fetch('https://api.sampleapis.com/movies/family');
//         const data = await resp.json();
//         setMovies(data);
//         console.log(data); // Add this line
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);
  

//   const nextSlide = () => {
//     const newIndex = (index + 4) % movies.length;
//     setIndex(newIndex);
//   };
  
//   const prevSlide = () => {
//     const newIndex = (index - 4 + movies.length) % movies.length;
//     setIndex(newIndex);
//   };
  

//   return (
//     <ImageCard>
//       <LatestReleaseText>Latest Releases</LatestReleaseText>
//       <ButtonContainer>
//         <button className="left" onClick={prevSlide}>{"<"}</button>
//         <button className="right" onClick={nextSlide}>{">"}</button>
//       </ButtonContainer>
//       <MovieContainer>
//         {movies.slice(index,index+8).map((movie, index) => (
//           <Card key={index}>
//             <img src={movie.posterURL} alt={`Movie ${index + 1}`} />
//             <Description>
//               <button className="subscribe">Watch Now</button>
//               <button className="plusbutton">&#43;</button>
//               <p>2022 <span>&#9679;</span> 3h 12m <span>&#9679;</span> 6 Languages <span>&#9679;</span></p>
//               <a href="/">Set more than a decade after the first film, dive into the story.</a>
//             </Description>
//           </Card>
//         ))}
//       </MovieContainer>
//     </ImageCard>
//   );
// };
// const ButtonContainer = styled.div`
// display: flex;
// justify-content: space-between;
// position: absolute;
// top: 50%; /* Adjust to center vertically */
// transform: translateY(-50%); /* Center vertically */
// z-index: 2;
// button.left {
//   cursor: pointer;
//   color: red;
//   font-size: 24px;
//   font-weight: bold;
//   background: none;
//   border: none;
//   margin-right: 10px; /* Adjust for spacing */
// }
// button.right {
//   cursor: pointer;
//   font-size: 24px;
//   font-weight: bold;
//   background: none;
//   border: none;
//   color: red;
//   margin-left:1100px
// }
// `;


// const LatestReleaseText = styled.h2`
//   text-align: left;
//   margin-bottom: 5px;
//   font-size: 20px;
// `;

// const ImageCard = styled.div`
//   position: relative;
//   top: -150px;
//   left: 10%;
//   z-index: 200;
// `;

// const MovieContainer = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//    width: 8850px;
  
  
// `;

// const Card = styled.div`
//   position: relative;
//   width: 150px;
//   height: 210px;
//   margin: 4px;
//   transition: transform 0.3s ease-in-out;
//   &:hover {
//     transform: scale(1.8);
//     z-index: 1;
//     img{
//     height  : 72%;
//     }
//   }
//   img {
//     width: 100%; 
//     height: 100%;
//   }
// `;

// const Description = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   background-color: black;
//   padding: 10px;
//   box-sizing: border-box;
//   opacity: 0;
//   transition: opacity 0.3s ease-in-out;
  
//   ${Card}:hover & {
//     opacity: 1;
   
//     a{
//     font-size:8px;
//     line-height:-9;
//   }
//   p{
//     font-size:8px;
//     font-weight:bold;
//   }
//   }
// `;



// const Button = styled.button`
//   background-color: rgba(250, 247, 251, 0.2);
//   color:rgb(252, 246, 246);
//   border: none;
//   padding: 5px 10px;
//   font-size: 12px;
//   font-weight: bold;
  
// `;

// export default Movielist;




