import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="app">      
      <div className="appMiddle">
        <h3 style={{color : "white"}}>Heart Rate Monitor</h3>        
        <Home />
      </div>      
    </div>
  );
}

export default App;
