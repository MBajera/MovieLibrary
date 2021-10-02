import React, {useState} from "react";
import Tumbnail from "./Tumbnail";

const ToWatch = ({toWatch}) => {


    return (
        <div>
            {toWatch.map(movie => <Tumbnail movie={movie} key={movie.imdbID}/>)}
        </div>
    );
};

export default ToWatch;
