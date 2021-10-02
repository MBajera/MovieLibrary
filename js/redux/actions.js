export const MOVIE_FETCHING = 'MOVIE_FETCHING'
export const MOVIE_FETCHED = 'MOVIE_FETCHED'
export const MOVIE_ERROR = 'MOVIE_ERROR'

export const TO_WATCH_MOVIE_FETCHING = 'TO_WATCH_MOVIE_FETCHING'
export const ADD_TO_WATCH = 'ADD_TO_WATCH'
export const REMOVE_TO_WATCH = 'REMOVE_TO_WATCH'
export const TO_WATCH_MOVIE_ERROR = 'TO_WATCH_MOVIE_ERROR'

export const ADD_WATCHED = 'ADD_WATCHED'
export const REMOVE_WATCHED = 'REMOVE_WATCHED'


export const fetchMovieList = (title) => {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=993e5224`
    return (dispatch) => {
        dispatch(movieFetching())
        fetch(url)
            .then(response => response.json())
            .then(movies => {
                console.log(`W fetchMovieList: ${movies}`);
                dispatch(movieFetched(movies))
            })
            .catch(error => console.log(`Błąd połączenia: ${error}`))
    }
}

export const fetchMovie = (movieId) => {
    const url = `https://www.omdbapi.com/?i=${movieId}&apikey=993e5224`
    console.log(movieId)
    return (dispatch) => {
        dispatch(toWatchMovieFetching())
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                console.log(`W fetchMovie: ${movie}`);
                dispatch(addToWatch(movie))
            })
            .catch(error => console.log(`Błąd połączenia w fetchMovie: ${error}`))
    }
}


// export const fetchMovie = (movieId) => {
//     const url = `https://www.omdbapi.com/?i=${movieId}&apikey=993e5224`
//     return (dispatch) => {
//         dispatch(movieFetching())
//         fetch(url)
//             .then(response => response.json())
//             .then(movie => {
//                 console.log(`W fetchMovie: ${movie}`);
//                 dispatch(movieFetched(movie))
//             })
//             .catch(error => console.log(`Błąd połączenia: ${error}`))
//     }
// }

// const movieInfo = (urlParams) => {
//     const [movieData, setMovieData] = useState(false)
//
//     async function fetchMovie() {
//         const url = `http://www.omdbapi.com/?i=tt3896198&apikey=993e5224${urlParams}`
//         const result = await fetch(url);
//         const data = await result.json();
//         console.log(data)
//         setMovieData(data)
//     }
// }

export const movieFetching = (payload) => ({
    type: MOVIE_FETCHING,
    payload
})

export const movieFetched = (payload) => ({
    type: MOVIE_FETCHED,
    payload
})

export const movieError = (payload) => ({
    type: MOVIE_ERROR,
    payload
})

export const toWatchMovieFetching = (payload) => ({
    type: TO_WATCH_MOVIE_FETCHING,
    payload
})

export const addToWatch = (payload) => ({
    type: ADD_TO_WATCH,
    payload
})

export const removeToWatch = (payload) => ({
    type: REMOVE_TO_WATCH,
    payload
})

export const toWatchMovieError = (payload) => ({
    type: TO_WATCH_MOVIE_ERROR,
    payload
})

export const addWatched = (payload) => ({
    type: ADD_WATCHED,
    payload
})

export const removeWatched = (payload) => ({
    type: REMOVE_WATCHED,
    payload
})