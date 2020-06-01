import {
    GET_CHAT_MESSAGES,
    SEND_MESSAGE
} from './types';

// GET CHAT MESSAGES
export const getChatMessages = () => dispatch => {
    dispatch({
        type: GET_CHAT_MESSAGES,
        payload: []
    });
}

// SEND MESSAGE
export const sendMessage = (message) => dispatch => {
    dispatch({
        type: SEND_MESSAGE,
        payload: message
    })
}