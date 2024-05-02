import './App.css';
import {BrowserRouter as Router,Switch,route } from "react-router-dom";
import Video from './components/home'
import Navbar from './components/Navbar'
import Movielist from './components/Movieslist'
import PopularMovie from './components/PopularMovie' 
import HitMovie from './components/HitCards'
function App() {
  return (
    <div className="App">
        <Navbar />
            <Video />
            <Movielist />
            <PopularMovie />
            <HitMovie />
    </div>
  );
}

export default App;
