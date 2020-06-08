import Activity from './Activity';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsFromProps: state.firebase.posts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);