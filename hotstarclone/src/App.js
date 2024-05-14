import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import DetailedPage from './components/DetailedPage/DetailedPage';
import { FavoritesProvider } from './components/MovieList/FavoritesContext'; // Import FavoritesProvider

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FavoritesProvider> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Detailed-Page/:id" element={<DetailedPage />} />
          </Routes>
        </FavoritesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
