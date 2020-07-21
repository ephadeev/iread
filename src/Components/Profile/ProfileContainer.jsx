import {connect} from 'react-redux';
import Profile from "./Profile";

const mapStateToProps = (state) => {
    return {
        authorizedUserData: state.authorization.authorizedUserData,
        isLoading: state.authorization.isLoading,
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mapStateToProps)(Profile)