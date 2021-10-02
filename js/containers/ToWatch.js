import {connect} from 'react-redux';
import ToWatch from "../components/ToWatch";


const mapState = (state) => ({
    toWatch: state.toWatch
});


export default connect(mapState)(ToWatch);

