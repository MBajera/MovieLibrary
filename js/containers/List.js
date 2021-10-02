import { connect } from 'react-redux';

import List from '../components/List';

const mapState = (state) => ({
    movies: state.movieList.movies
});


export default connect(mapState)(List);

