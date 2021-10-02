import { connect } from 'react-redux';
import MovieDetails from "../components/MovieDetails";

const mapState = (state, ownProps) => ({
    movieId: ownProps.match.params.id,
});



export default connect(mapState)(MovieDetails);