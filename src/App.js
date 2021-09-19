import "./styles.css";
import React, { useState } from "react";
const moviesList = {
  Action: [
    { name: "Singham (2011)", rating: "⭐6.8" },
    { name: "Dhoom 2 (2006)", rating: "⭐6.6" },
    { name: "Khiladiyon Ka Khiladi (1996)", rating: "⭐6" },
    { name: "Ek Tha Tiger (2012)", rating: "⭐5.5" },
    { name: "Krrish (2006)", rating: "⭐6.4" }
  ],
  Comedy: [
    { name: "Hera Pheri (2000)", rating: "⭐8.2" },
    { name: "Munna Bhai M.B.B.S. (2003)", rating: "⭐8.1" },
    { name: "Andaz Apna Apna (1994)", rating: "⭐8.1" },
    { name: "3 Idiots (2009)", rating: "⭐8.4" },
    { name: "OMG: Oh My God! (2012)", rating: "⭐8.1" }
  ],
  Drama: [
    { name: "Gangs of Wasseypur (2012)", rating: "⭐8.2" },
    { name: "Lagaan: Once Upon a Time in India (2001)", rating: "⭐8.1" },
    { name: "Koshish (1972)", rating: "⭐8.6" },
    { name: "Rang De Basanti (2006)", rating: "⭐8.1" },
    { name: "Mughal-E-Azam (1960)", rating: "⭐8.2" }
  ],
  Horror: [
    { name: "Mahal (1949)", rating: "⭐7.1" },
    { name: "Bees Saal Baad (1962)", rating: "⭐7.1" },
    { name: "Raaz (2002)", rating: "⭐6.5" },
    { name: "Bhoot (2003)", rating: "⭐6.5" },
    { name: "Darna Mana Hai (2003)", rating: "⭐6.3" }
  ],
  Thriller: [
    { name: "Drishyam (2015)", rating: "⭐8.2" },
    { name: "Black Friday (2004)", rating: "⭐8.5" },
    { name: "NH 10 (2015)", rating: "⭐7.2" },
    { name: "Paan Singh Tomar (2012)", rating: "⭐8.2" },
    { name: "Talvar (2015)", rating: "⭐8.2" }
  ],
  Historical: [
    { name: "Gandhi (1982)", rating: "⭐8" },
    { name: "Jodhaa Akbar (2008)", rating: "⭐7.6" },
    { name: "The Legend of Bhagat Singh (2002)", rating: "⭐8.1" },
    { name: "Jhansi Ki Rani (1953)", rating: "⭐6.9" },
    { name: "Sardar (1993)", rating: "⭐7.9" }
  ]
};

var genreName = Object.keys(moviesList);
export default function App() {
  const [mList, setmList] = useState("Action");
  function buttonClick(event) {
    setmList(event);
  }
  return (
    <div className="App">
      <div>
        <h1>🎥Movies Genre</h1>
        <h4>Checkout my favorite movies.Select a genre to get started.</h4>
      </div>
      <div>
        {genreName.map(function (genre) {
          return (
            <button key={genre} onClick={() => buttonClick(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div>
        <ul>
          {moviesList[mList].map(function (movie) {
            return (
              <li className="list" key={movie.name}>
                <div style={{ fontWeight: "700" }}>{movie.name}</div>
                <div>{movie.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
