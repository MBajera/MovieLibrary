export const getMovie = (state, filter) => {
    if (filter !== "") {
        return state.find(element => element.imdbID === filter)
    } else
        return console.log("brak imdbID w state")
}