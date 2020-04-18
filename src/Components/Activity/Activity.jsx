import React from "react";
import stylesActivity from './Activity.module.css';
import Post from './Posts/Post';

const Activity = (props) => {
    let posts = props.messages.map(post => <Post userName={props.users[post.userId].name}
                                                 userImage={props.users[post.userId].image}
                                                 message={post.text} />);

    return (
        <div className={stylesActivity.activity}>
            Стена с общедоступными постами друзей. Что-то наподобии активности в steam.
            При клике на аватар или имя автора поста должен открываться http://localhost:3000/profile/id.
            А при наведении мыши всплывашка с немного большей информацией о человеке.
            {posts}
        </div>
    );
};

export default Activity;