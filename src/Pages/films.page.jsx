import React, { useState, useEffect } from "react";
import { filterFilmsByDirector } from "../helpers/film.helpers";
import { getListOf } from "../helpers/film.helpers";
import { Link } from "react-router-dom";
import { getFilmStats } from "../helpers/film.helpers";

function FilmsPage() {
  const [list, setList] = useState([]);

  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((res) => res.json())
      .then((films) => {
        console.log(films) 
        setList(films)})
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");
  let { avg_score, latest, total } = getFilmStats(filmsByDirector);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="searchDirector">directors</label>
          Filter by Director:
          <select
            name="searchDirector"
            id="searchDirector"
            value={searchDirector}
            onChange={(event) => setSearchDirector(event.target.value)}
          >
            <option value="">All</option>
            {directors.map((director, index) => {
              return(<option key={director+index} value={director}>{director}</option>);
            })}
          </select>
        </div>
      </form>
      <div>
  <div>
    <span># Of Films</span>
    <span>{total}</span>
  </div>
  <div>
    <span>Average Rating</span>
    <span>{avg_score.toFixed(2)}</span>
  </div>
  <div>
    <span>Latest Film</span>
    <span>{latest}</span>
  </div>
</div>
      <ul>
        {filmsByDirector.map((film) => {
          return <li key={film.id}>
            <Link to={`film/${film.id}`}>{film.title}</Link>
            </li>;
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
