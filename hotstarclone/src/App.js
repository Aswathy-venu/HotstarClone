import './App.css';
import { BrowserRouter as Router, Switch, route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Video from './components/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import DetailedPage from './components/DetailedPage/DetailedPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Video />
        <Routes>
          <Route path="/Detailed-Page" element={<DetailedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
