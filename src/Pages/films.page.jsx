import React, { useState, useEffect } from "react";

export function HomePage() {
const [list, setList] = useState([]);

const [searchDirector, setSearchDirector] = useState("");

function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => res.json())
    .then((films) => setList(films))
    .catch((err) => console.error(err));
}

useEffect(() => {
    getFilms();
}, []);

return (
    <div>
    <h1>Studio Ghibli Films</h1>
    <form action="">
        <div className="form-group">
            <label htmlFor="searchDirector">
                Filter by Director:
                </label>
            <select 
            name="searchDirector" 
            id="searchDirector">
            value={
                
            }
            </select>
            </div>
    </form>
    <ul>
        {list.map((film) => {
        return <li key={film.id}>{film.title}</li>;
        })}
    </ul>
    </div>
);
}