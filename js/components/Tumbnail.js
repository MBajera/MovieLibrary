import React from "react";
import ToWatch from "../containers/ToWatchCheckbox";
import {Link} from "react-router-dom";

const Tumbnail = ({movie}) => {

    if (movie.Poster === "N/A") return null
    else return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <Link to={`/movie/${movie.imdbID}`}>
                    <img src={movie.Poster} className="bd-placeholder-img card-img-top"/>
                </Link>
                <div>rating star widget</div>
                <ToWatch imdbId={movie.imdbID}/>
            </div>
        </div>
    );
};

export default Tumbnail;
