import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import DetailedPage from './components/DetailedPage/DetailedPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detailed-Page/:id" element={<DetailedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

