import React, {useState} from "react";
import Tumbnail from "./Tumbnail";

const Watched = ({watched}) => {


    return (
        <div>
            {watched.map(movie => <Tumbnail movie={movie} key={movie.imdbID}/>)}
        </div>
    );
};

export default Watched;
