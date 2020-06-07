import React from "react";
import stylesActivity from './Activity.module.css';
import Post from './Posts/Post';
import PropTypes from 'prop-types';
import AddPost from '../AddPost/AddPost';

const Activity = ({postsFromProps, users, addPost}) => {
    let posts = postsFromProps.map(post => <Post userName={users[post.userId].name}
                                              userImage={users[post.userId].image}
                                              message={post.text}
                                              key={post.userId} />);

    return (
        <div className={stylesActivity.activity}>
            <AddPost />
            {posts}
        </div>
    );
};
/*Стена с общедоступными постами друзей. Что-то наподобии активности в steam.
            При клике на аватар или имя автора поста должен открываться http://localhost:3000/profile/id.
            А при наведении мыши всплывашка с немного большей информацией о человеке.*/
Activity.propTypes = {
    postsFromProps: PropTypes.array,
    users: PropTypes.array,
    addPost: PropTypes.func
};

export default Activity;