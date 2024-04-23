import './App.css';
import {BrowserRouter as Router,Switch,route } from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <switch>
          <route exact path="/">
            
            <Login />
          </route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
