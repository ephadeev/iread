const store = {
    _state: {
        users: [
            {name: 'Richard Hendricks', image: 'https://www.kinopoisk.ru/images/sm_actor/1615667.jpg'},
            {name: 'Nelson Bighetti', image: 'https://www.kinopoisk.ru/images/sm_actor/1852968.jpg'},
            {name: 'Bertram Gilfoyle', image: 'https://www.kinopoisk.ru/images/sm_actor/11897.jpg'},
            {name: 'Dinesh Chugtai', image: 'https://www.kinopoisk.ru/images/sm_actor/1833413.jpg'},
            {name: 'Monica Hall', image: 'https://www.kinopoisk.ru/images/sm_actor/731114.jpg'},
            {name: 'Jared', image: 'https://www.kinopoisk.ru/images/sm_actor/1085386.jpg'}
        ],
        posts: [
            {id: 0, userId: 0, text: 'Hello! How are you?', isPrivate: false},
            {id: 1, userId: 1, text: 'Im fine thank you!', isPrivate: false},
            {id: 2, userId: 2, text: 'Where are you?', isPrivate: false},
            {id: 3, userId: 3, text: 'Whats uuuuuuup', isPrivate: false},
            {id: 4, userId: 4, text: 'I am going home.', isPrivate: false},
            {id: 5, userId: 5, text: 'Here we home again', isPrivate: false},
            {id: 6, userId: 0, text: 'love this book.', isPrivate: false},
            {id: 7, userId: 0, text: 'nice one', isPrivate: false}
        ],
        careers: {
            shortcomings: [
                {id: 0, text: 'watched only the first part of the godfather', isChecked: false},
                {id: 1, text: 'don\'t eat olives', isChecked: false},
                {id: 2, text: 'don\'t like Russian films', isChecked: false},
                {id: 3, text: 'don\'t have telekinesis', isChecked: false},
                {id: 4, text: 'don\'t speak elven', isChecked: false},
                {id: 5, text: 'bad sense of humor', isChecked: false},
                {id: 6, text: 'too good sense of humor', isChecked: false}
            ],
            checkedElements: 0
        }
    },
    getState() {
        return this._state;
    },
    setState(value) {
        this._state = value;
    },
    _renderEntireTree() {
        console.log('state changed');
    },
    checkAmountOfCheckedElements(status, id) {
        if (status) {
            this._state.careers.checkedElements++;
            this._state.careers.shortcomings[id].isChecked = true;
        } else {
            this._state.careers.checkedElements--;
            this._state.careers.shortcomings[id].isChecked = false;
        }
        this._renderEntireTree(this.getState());
    },
    addPost(text) {
        let post = {
            id: 8,
            userId: 0,
            text: text,
            isPrivate: false
        };
        this._state.posts.push(post);
        this._renderEntireTree(this.getState());
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    }
};

export default store;