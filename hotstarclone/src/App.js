import './App.css';
import {BrowserRouter as Router,Switch,route } from "react-router-dom";
import Video from './components/home'
import Navbar from './components/Navbar'
// import Movielist from './components/Movieslist'

function App() {
  return (
    <div className="App">
        <Navbar />
            <Video />
            {/* <Movielist /> */}
           
    </div>
  );
}

export default App;
