import React, {useState} from 'react'

const SearchForm = ({loading, onFetchMovie}) => {

    const [movieTitle, setMovieTitle] = useState("")

    const inputChange = (e) => {
        setMovieTitle(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onFetchMovie(movieTitle)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={movieTitle} onChange={(e) => inputChange(e)} placeholder="podaj tytuł filmu..."/>
            <button type="submit" disabled={loading}>{loading ? "ŁADUJĘ" : "SZUKAJ"}</button>
        </form>
    )
}

export default SearchForm