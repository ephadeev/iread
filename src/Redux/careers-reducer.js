let CHECK_AMOUNT_OF_CHECKED_ELEMENT = 'CHECK-AMOUNT-OF-CHECKED-ELEMENT';

const careersReducer = (state, action) => {
    if (action.type === CHECK_AMOUNT_OF_CHECKED_ELEMENT) {
        if (action.status) {
            state.checkedElements++;
            state.shortcomings[action.id].isChecked = true;
            return state;
        } else {
            state.checkedElements--;
            state.shortcomings[action.id].isChecked = false;
            return state;
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