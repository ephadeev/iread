let CHECK_AMOUNT_OF_CHECKED_ELEMENT = 'CHECK-AMOUNT-OF-CHECKED-ELEMENT';

let initialState = {
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
};

const careersReducer = (state = initialState, action) => {
    if (action.type === CHECK_AMOUNT_OF_CHECKED_ELEMENT) {
        if (action.status) {
            let stateCopy = {...state};
            stateCopy.checkedElements++;
            stateCopy.shortcomings[action.id].isChecked = true;
            return stateCopy;
        } else {
            let stateCopy = {...state};
            stateCopy.checkedElements--;
            stateCopy.shortcomings[action.id].isChecked = false;
            return stateCopy;
        }
    }
    return state;
};

export const checkAmountOfCheckedElementsActionCreator = (status, id) => {
    return {
        type: CHECK_AMOUNT_OF_CHECKED_ELEMENT,
        status: status,
        id: id
    }
};

export default careersReducer;