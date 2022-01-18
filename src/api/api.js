import axios from 'axios';
import { setAddManyCustomer } from './../store/customerReducer';

export const getUsers = () => {
    return async (dispatch) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(setAddManyCustomer(response.data));
    }
}

//с помощью метода fetch()
// export const getUsers = () => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(json=> dispatch(setAddManyCustomer(json)))
//     }
// }