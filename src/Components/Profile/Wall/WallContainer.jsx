import Wall from './Wall';
import {connect} from 'react-redux';

let mapStateToProps = state => {
    return {
        postsFromProps: state.firebase.posts,
        authorizedUser: state.firebase.authorizedUser
    }
};

let mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wall);