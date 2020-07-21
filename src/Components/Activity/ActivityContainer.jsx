import Activity from './Activity';
import {connect} from 'react-redux';

let mapStateToProps = state => {
    return {
        postsFromProps: state.posts.posts,
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mapStateToProps)(Activity);