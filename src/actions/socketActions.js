import {
    GET_SOCKET
} from './types';

// GET SOCKET
export const getSocket = () => dispatch => {
    dispatch({
        type: GET_SOCKET
    });
}
