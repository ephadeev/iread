import React from "react";
import stylesActivity from './Activity.module.css';
import Post from './Posts/Post';

const Activity = () => {

    let users = [
        {name: 'Richard Hendricks', image: 'https://www.kinopoisk.ru/images/sm_actor/1615667.jpg'},
        {name: 'Nelson Bighetti', image: 'https://www.kinopoisk.ru/images/sm_actor/1852968.jpg'},
        {name: 'Bertram Gilfoyle', image: 'https://www.kinopoisk.ru/images/sm_actor/11897.jpg'},
        {name: 'Dinesh Chugtai', image: 'https://www.kinopoisk.ru/images/sm_actor/1833413.jpg'},
        {name: 'Monica Hall', image: 'https://www.kinopoisk.ru/images/sm_actor/731114.jpg'},
        {name: 'Jared', image: 'https://www.kinopoisk.ru/images/sm_actor/1085386.jpg'}
    ];

    let messages = [
        {userId: 0, text: 'Hello! How are you?'},
        {userId: 1, text: 'Im fine thank you!'},
        {userId: 2, text: 'Where are you?'},
        {userId: 3, text: 'Whats uuuuuuup'},
        {userId: 4, text: 'I am going home.'},
        {userId: 5, text: 'Here we home again'}
    ];

    let posts = messages.map(post => <Post userName={users[post.userId].name} userImage={users[post.userId].image} message={post.text} />);

    return (
        <div className={stylesActivity.activity}>
            Стена с общедоступными постами друзей. Что-то наподобии активности в steam.
            {posts}
        </div>
    );
};

export default Activity;