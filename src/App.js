import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="app">      
      <div className="appMiddle">
        <h1 style={{color : "white"}}>Heart Rate Monitor</h1>
        <Home className="container"/>
      </div>      
    </div>
  );
}

export default App;
