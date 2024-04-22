import './App.css';
import {BrowserRouter as Router,Switch,route } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
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
