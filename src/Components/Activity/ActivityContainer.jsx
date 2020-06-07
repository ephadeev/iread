import Activity from './Activity';
import {connect} from 'react-redux';
import {addPostActionCreator} from '../../Redux/reducers/activity-reducer';

let mapStateToProps = (state) => {
    return {
        postsFromProps: state.activity.posts,
        users: state.activity.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);