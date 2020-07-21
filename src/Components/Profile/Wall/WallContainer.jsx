import Wall from './Wall';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        postsFromProps: state.posts.posts,
        authorizedUser: state.authorization.authorizedUser
    }
};

export default connect(mapStateToProps)(Wall);