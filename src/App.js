import logo from './images/anna-logo.png';
import './App.css';
import Dictionary from "./Dictionary.js";


function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary/>
      </div>
    </div>
  );
}

export default App;
