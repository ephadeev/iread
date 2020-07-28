import React from "react";
import PropTypes from 'prop-types';
import '../../App.css';
import Post from './Post/Post';
import AddPost from '../AddPost/AddPost';

const Activity = ({postsFromProps, checkedTheme}) => {
    let posts = postsFromProps
        .sort((a, b) => a.time?.seconds - b.time?.seconds)
        .map((post, index) => {
            let hours = new Date(post.time?.seconds * 1000).getHours();
            let minutes = new Date(post.time?.seconds * 1000).getMinutes();
            return <Post userId={post.userId}
                         postText={post.text}
                         key={index}
                         hours={hours > 9 ? hours : `0${hours}`}
                         minutes={minutes > 9 ? minutes : `0${minutes}`}
                         checkedTheme={checkedTheme} />
        });
    // TODO: need to show only posts with isPrivate=false
    // TODO: on Avatar click open http://localhost:3000/user/id
    // TODO: on Avatar mouseover show a little bit more info about user
    return (
        <main className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
            <AddPost />
            {posts}
        </main>
    );
};

Activity.propTypes = {
    postsFromProps: PropTypes.array,
    checkedTheme: PropTypes.string
};

export default Activity;