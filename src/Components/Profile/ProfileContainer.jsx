import {connect} from 'react-redux';
import Profile from "./Profile";

const mapStateToProps = (state) => {
    return {
        users: state.firebase.users,
        authorizedUserData: state.firebase.authorizedUserData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)