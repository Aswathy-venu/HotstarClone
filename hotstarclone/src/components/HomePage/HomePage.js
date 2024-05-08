import * as Elements from '../HomePage/HomePage.Style.jsx'
import FilmCards from '../MovieList/LatestReleases.js'
import PopularShows from '../MovieList/PopularShows.js'
import LoveStories from '../MovieList/LoveStories.js'
import BgVideo from '../../media/video1.mp4'
import Avatar from '../../media/avatar.webp'
import Release from '../../media/New_Release.webp'


const HomePage = (props) => {
    return(
        <>
        <Elements.Length>
        <Elements.Container>
            <Elements.Content>
                <Elements.Image>
                  <img src={Avatar} alt="avantar" className="avatar"/>
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
                    <video src={BgVideo} autoPlay loop muted>
                    </video>
                </Elements.Video>
                
            </Elements.Content>
            <FilmCards/>
            <PopularShows/>
            <LoveStories/>
            
        </Elements.Container>
       <Elements.Fade />
       <Elements.FadeBottom />
       </Elements.Length>
       </>
 
    );
};
export default HomePage;