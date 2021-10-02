import React from 'react'
import Tumbnail from "./Tumbnail";
import SearchForm from "../containers/SearchForm";

const List = ({movies}) => {
    return (
        <div>
            <SearchForm/>
            <div className="py-5 mb-5 bg-light">
                <div className="container">
                    <div className="row">
                        {movies.map(movie => <Tumbnail movie={movie} key={movie.imdbID}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List