import { connect } from 'react-redux'
import {fetchMovieList} from "../redux/actions";
import SearchForm from "../components/SearchForm";

const mapState = (state) => ({
    loading: state.movieList.loading
})

const mapDispatch = (dispatch) => ({
    onFetchMovie: (params) => dispatch(fetchMovieList(params)),
});

export default connect(mapState, mapDispatch)(SearchForm)

