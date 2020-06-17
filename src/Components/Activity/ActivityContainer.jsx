import Activity from './Activity';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsFromProps: state.posts.posts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);