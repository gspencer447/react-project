import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is my h1</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is so cool!
        </p>
        <p>This is my new paragraph!</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
