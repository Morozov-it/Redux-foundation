const ADD_CUSTOMER = 'ADD_CUSTOMER';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
const ADD_MANY_CUSTOMER = 'ADD_MANY_CUSTOMER';

const initialState = {
    items: [],
};

export const customerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                items: [...state.items, payload]
            }
        case ADD_MANY_CUSTOMER:
            return {
                ...state,
                items: [...state.items, ...payload]
            }
        case DELETE_CUSTOMER:
            return {
                ...state,
                items: state.items.filter((item)=> item.name !== payload)
            }
        default:
            return state
    }
};

export const setAddCustomer = (customer) => ({
    type: ADD_CUSTOMER,
    payload: customer
});
export const setAddManyCustomer = (customers) => ({
    type: ADD_MANY_CUSTOMER,
    payload: customers
});
export const setDeleteCustomer = (name) => ({
    type: DELETE_CUSTOMER,
    payload: name
})
