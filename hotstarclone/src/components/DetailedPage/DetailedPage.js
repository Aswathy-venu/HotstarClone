import * as Elements from '../DetailedPage/DetailedPage.Style'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Release from '../../media/New_Release.webp'

const DetailedPage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([null]);

    useEffect(() => {
     const getSingleProduct = async () => {
        try {
          const resp = await fetch(`https://api.sampleapis.com/movies/animation/${id}`);
          const data = await resp.json();
          setMovies(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    getSingleProduct();
  },
  [id]);
 
    return(
        <>
        <Elements.Length>
        <Elements.Container>
            <Elements.Content>
                <Elements.Image>
                  <h2 alt="text">{movies.title}</h2>
                    <img src={Release} alt="release" className="release"/>
                    <p>2022 <span>&#9679;</span> 3h 12m <span>&#9679;</span> 6 Languages <span>&#9679;</span> <button>U/A 13+</button></p>
                    <a href="/">Set more than a decade after the first film, dive into the story of<br></br>
                        the Sully family0; the lengths they go to keep each other safe<br></br>
                        and the tragedies they endure.</a>
                    <h4>Science Fiction <span>&#124;</span> Action <span>&#124;</span> Adventure <span>&#124;</span> Fantasy </h4>
                    <button className="subscribe">&#9654;&nbsp;&nbsp;Subscribe To Watch</button>
                    <button className="plusbutton">&#43;</button> 
                </Elements.Image>
                <Elements.Video>
                <Elements.GradientOverlay />
                <Elements.Gradient />
                    <Elements.Picture>
                    <img src={movies.posterURL} />
                    </Elements.Picture>
                </Elements.Video>
                
            </Elements.Content>
           
            
        </Elements.Container>
       <Elements.Fade />
       <Elements.FadeBottom />
       </Elements.Length>
       </>
 
    );
};
export default DetailedPage ;