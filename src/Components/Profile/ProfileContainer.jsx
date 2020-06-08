import {connect} from 'react-redux';
import Profile from "./Profile";

const mapStateToProps = (state) => {
    return {
        authorizedUserData: state.firebase.authorizedUserData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)