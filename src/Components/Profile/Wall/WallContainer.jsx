import Wall from './Wall';
import {connect} from 'react-redux';

let mapStateToProps = state => {
    return {
        postsFromProps: state.posts.posts,
        authorizedUser: state.authorization.authorizedUser
    }
};

let mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wall);