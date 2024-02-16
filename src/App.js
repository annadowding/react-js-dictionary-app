import logo from './images/anna-logo.png';
import './App.css';


function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <button className="btn btn-primary">Hello</button>
      </div>
    </div>
  );
}

export default App;
