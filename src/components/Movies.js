import React from "react";
import { movies } from "../data";

function Movies() {
    return <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
            return <div>
                <b>Name: {movie.title}</b>
                <p key={movie.time}>Time: {movie.time}</p>
                <p>Genres:</p>
                <ul key={movie.name}>
                    {movie.genres.map(genre => {
                        return <li key={genre}>{genre}</li>
                    })}
                </ul>
            </div> })
        }
    </div>;
}

export default Movies;
