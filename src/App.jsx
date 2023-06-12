import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import React from 'react';
import FilmsList from './components/FilmsList';


function App(props) {
  const [list, setList] = useState(["ready", "set", "Go!"]);
  const [text, setText] = useState("");

  function handleSubmit(event){
    event.preventDefault();

    setList([...list, text])
    // setList(["ready", "set", "Go!", text])
  }


    return (
      <div className='App'>
        <h1>Hello Mars!</h1>
        <FilmsList />
        <form action="" onSubmit ={handleSubmit}>
          <input 
          type="text" 
          name="text"
          id="text"
          value = {text}
          onChange = {(e)=> 
          setText(e.target.value)
          }/>
        <ul>
          {list.map((task, id)=> {
            return <li key={id + task}>{task}</li>
          })}
        </ul>
        <button type='Submit'>Add</button>
        </form>
      </div>
    );
  }

export default App;
