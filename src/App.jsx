import logo from './logo.svg';
import './App.css';
import React from 'react';
import FilmsList from './components/FilmsList';

// function App() {
//   return (
//     <div className="App">
//       <h1>This is my h1</h1>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           React is so cool!
//         </p>
//         <p>This is my new paragraph!</p>
//         <ul>
//           <li>List item 1</li>
//           <li>List item 2</li>
//           <li>List item 3</li>
//         </ul>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ["ready", "set", "Go!"],
      text: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
    
    
  }
  onSubmit = (event) => {
    event.preventDefault()
    let newList = [...this.state.list, this.state.text]
    this.setState({list: newList, text: ""})
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form action="" onSubmit ={this.onSubmit}>
          <input type="text" value = {this.state.text}
          onChange = {(e)=> this.setState({text: e.target.value})}/>
        <ul>
          {this.state.list.map((task, id)=> {
            return <li key={id + task}>{task}</li>
          })}
        </ul>
        <button type='Submit'>Add</button>
        </form>
        <FilmsList />
      </div>
    );
  }
}
export default App;
