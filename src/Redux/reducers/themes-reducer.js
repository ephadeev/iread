import {ON_CHANGE_THEME} from '../types';

let initialState = {
    colorSchemes: [
        {id: 0, colorScheme: 'Yellow'},
        {id: 1, colorScheme: 'Black'},
        {id: 2, colorScheme: 'Gold'},
        {id: 3, colorScheme: 'Orange'},
        {id: 4, colorScheme: 'Pink'},
        {id: 5, colorScheme: 'Blue'},
        {id: 6, colorScheme: 'Green'},
        {id: 7, colorScheme: 'Indigo'},
    ],
    checkedTheme: ''
};

const themesReducer = (state = initialState, action) => {
    switch (action.type) {
        // change theme
        case ON_CHANGE_THEME: {
            return {
                ...state,
                checkedTheme: action.payload
            }
        }
        default: {
            return state
        }
    }
};

export default themesReducer;