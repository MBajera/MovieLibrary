import React, {useState} from "react";

const ToWatchChecbox = ({imdbId, toWatchList, onAddToWatch, onRemoveToWatch}) => {
    const isInToWatchList = toWatchList.find(movie => movie.imdbID === imdbId)
    const [toWatch, setToWatch] = useState(isInToWatchList)

    const checkboxChange = () => {
        setToWatch(!toWatch)
        !toWatch ? onAddToWatch(imdbId) : onRemoveToWatch(imdbId)
    }

    return (
        <div>
            <input type="checkbox" onChange={checkboxChange} name="toWatch" checked={toWatch}/>
        </div>
    );
};

export default ToWatchChecbox;
