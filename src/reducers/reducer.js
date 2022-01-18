const ADD_CASH = 'ADD_CASH';
const DELETE_CASH = 'DELETE_CASH';

const initialState = {
    cash: 0,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CASH:
            return {
                ...state,
                cash: state.cash + payload
            }
        case DELETE_CASH:
            return {
                ...state,
                cash: state.cash - payload
            }

        default:
            return state
    }
};
export default reducer;

export const setAddCash = (cost) => ({
    type: ADD_CASH,
    payload: cost
});
export const setDeleteCash = (cost) => ({
    type: DELETE_CASH,
    payload: cost
})
