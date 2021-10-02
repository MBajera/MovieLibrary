import {connect} from 'react-redux';
import Watched from "../components/Watched";


const mapState = (state) => ({
    watched: state.watched
});


export default connect(mapState)(Watched);

