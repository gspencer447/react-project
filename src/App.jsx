import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import React from 'react';
import FilmsList from './components/FilmsList';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { HomePage } from './Pages';
import { FilmsPage } from './Pages';
import { SingleFilmPage } from './Pages';

function App(props) {
  const [list, setList] = useState(["ready", "set", "Go!"]);
  const [text, setText] = useState("");

  function handleSubmit(event){
    event.preventDefault();

    setList([...list, text])
    // setList(["ready", "set", "Go!", text])
  }

    return (
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="films">Films</NavLink>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/"element={<HomePage />} />
          <Route path="films"element={<FilmsPage />} />
          <Route path="films/film/:id" element={<SingleFilmPage />} /> 
          </Routes>    
          </BrowserRouter>
      /* /* <div className='App'>
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
      // </div> */
    )
  }

export default App;
