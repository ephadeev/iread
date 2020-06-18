import {ON_CHANGE_FIRST_NAME, ON_CHANGE_HOME_TOWN, ON_CHANGE_IMAGE, ON_CHANGE_LAST_NAME} from "../types";


const initialState = {
    firstName: '',
    lastName: '',
    Hometown: '',
    image: '',
    isLoading: false,
    error: null
};

const editProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        // edit first name
        case ON_CHANGE_FIRST_NAME: {
            return {
                ...state,
                firstName: action.payload
            }
        }
        // edit last name
        case ON_CHANGE_LAST_NAME: {
            return {
                ...state,
                lastName: action.payload
            }
        }
        // edit hometown
        case ON_CHANGE_HOME_TOWN: {
            return {
                ...state,
                Hometown: action.payload
            }
        }
        // edit image url
        case ON_CHANGE_IMAGE: {
            return {
                ...state,
                image: action.payload
            }
        }
        default: {
            return state
        }
    }
};

export default editProfileReducer;