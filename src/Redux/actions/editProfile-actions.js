import {ON_CHANGE_FIRST_NAME, ON_CHANGE_HOME_TOWN, ON_CHANGE_IMAGE, ON_CHANGE_LAST_NAME} from '../types';

// edit first name
export const onChangeFirstName = firstName => ({type: ON_CHANGE_FIRST_NAME, payload: firstName});

// edit last name
export const onChangeLastName = lastName => ({type: ON_CHANGE_LAST_NAME, payload: lastName});

// edit Hometown
export const onChangeHometown = hometown => ({type: ON_CHANGE_HOME_TOWN, payload: hometown});

// edit image url
export const onChangeImage = image => ({type: ON_CHANGE_IMAGE, payload: image});