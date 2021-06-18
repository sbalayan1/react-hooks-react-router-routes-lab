import React from "react";
import { directors } from "../data";

function Directors() {
    return <div>
        <h1>Directors Page</h1>
        {directors.map(director => {
            return (<div key={director.name}>
                Name: {director.name}
                <p>Movies:</p>
                <ul>
                    {director.movies.map(movies => {
                        return <li key={movies}>{movies}</li>
                    })}
                </ul>
            </div>)
        })}   
    </div>;
}

export default Directors;
