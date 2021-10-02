import { connect } from 'react-redux';

import ToWatchChecbox from '../components/ToWatchCheckbox';
import {fetchMovie, removeToWatch} from "../redux/actions";

const mapState = (state) => ({
    toWatchList: state.toWatch
});

const mapDispatch = (dispatch) => ({
    onAddToWatch: (movieId) => dispatch(fetchMovie(movieId)),
    onRemoveToWatch: (movieId) => dispatch(removeToWatch(movieId)),
});


export default connect(mapState, mapDispatch)(ToWatchChecbox);

