import React from "react";
import PropTypes from 'prop-types';
import '../../App.css';
import Post from './Post/Post';
import AddPost from '../AddPost/AddPost';

const Activity = ({postsFromProps, checkedTheme}) => {
    let posts = postsFromProps
        .sort((b, a) => a.time?.seconds - b.time?.seconds)
        .map((post, index) => {
            let minutes = new Date(post.time?.seconds * 1000).getMinutes();
            let hours = new Date(post.time?.seconds * 1000).getHours();
            let date = new Date(post.time?.seconds * 1000).getDate();
            let month = new Date(post.time?.seconds * 1000).getMonth();
            let year = new Date(post.time?.seconds * 1000).getFullYear();
            return <Post userId={post.userId}
                         postText={post.text}
                         key={index}
                         hours={hours > 9 ? `${hours}` : `0${hours}`}
                         minutes={minutes > 9 ? `${minutes}` : `0${minutes}`}
                         date={date}
                         month={month > 9 ? `${month}` : `0${month}`}
                         year={year}
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