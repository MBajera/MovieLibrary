import React, {useEffect, useState} from "react";
import ToWatch from "../containers/ToWatchCheckbox";

const MovieDetails = ({movieId}) => {
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchMovie(movieId) {
        const url = `https://www.omdbapi.com/?i=${movieId}&apikey=993e5224`
        const response = await fetch(url)
        const movie = await response.json()
        setMovie(movie)
        setLoading(false)
        // const error = await catch(error => console.log(`Błąd połączenia: ${error}`))
    }

    useEffect(() => {
        fetchMovie(movieId)
    }, [])

    if (loading) return <h1>Ładuję...</h1>
    else return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} className="bd-placeholder-img card-img-top"/>
                <div>rating star widget</div>
                <ToWatch imdbId={movieId}/>
            </div>
            <div>
                <h3>Rok: {movie.Year}</h3>
                <h3>Reżyser: {movie.Director}</h3>
                <p>{movie.Plot}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
