const ADD_CUSTOMER = 'ADD_CUSTOMER';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

const initialState = {
    customers: [],
};

export const customerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, payload]
            }
        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, payload]
            }

        default:
            return state
    }
};

export const setAddCustomer = (customer) => ({
    type: ADD_CUSTOMER,
    payload: customer
});
export const setDeleteCustomer = (customer) => ({
    type: DELETE_CUSTOMER,
    payload: customer
})
