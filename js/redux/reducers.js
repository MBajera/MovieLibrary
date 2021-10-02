import {combineReducers} from 'redux'
import {
    ADD_TO_WATCH,
    ADD_WATCHED,
    MOVIE_ERROR,
    MOVIE_FETCHED,
    MOVIE_FETCHING,
    REMOVE_TO_WATCH,
    REMOVE_WATCHED
} from "./actions";

const initialMovieListState = {
    loading: false,
    error: "",
    movies: []
}

const movieList = (state = initialMovieListState, {type, payload}) => {
    switch (type) {
        case MOVIE_FETCHING:
            return {...state, loading: true}
        case MOVIE_FETCHED:
            return {...state, movies: payload.Search, loading: false}
        case MOVIE_ERROR:
            return {...state, error: payload}
        default:
            return state
    }
}

const initialMovieState = {
    loading: false,
    error: "",
    movie: null
}

const movie = (state = initialMovieState, {type, payload}) => {
    switch (type) {
        case MOVIE_FETCHING:
            return {...state, loading: true}
        case MOVIE_FETCHED:
            return {...state, movie: payload, loading: false}
        case MOVIE_ERROR:
            return {...state, error: payload}
        default:
            return state
    }
}

const toWatch = (state = [], {type, payload}) => {
    switch (type) {
        case ADD_TO_WATCH:
            return [...state, payload]
        case REMOVE_TO_WATCH:
            return [...state.filter(movie => movie.imdbID !== payload)]
        default:
            return state
    }
}

const watched = (state = [], {type, payload}) => {
    switch (type) {
        case ADD_WATCHED:
            return [...state, payload]
        case REMOVE_WATCHED:
            return [...state.filter(el => el !== payload)]
        default:
            return state
    }
}

export default combineReducers({
    movieList,
    movie,
    toWatch,
    watched,
});
