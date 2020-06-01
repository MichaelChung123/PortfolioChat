import {
    GET_CHAT_MESSAGES,
    SEND_MESSAGE,
    JOIN_CHAT,
    SET_USERNAME
} from './types';

// GET CHAT MESSAGES
export const getChatMessages = () => dispatch => {
    dispatch({
        type: GET_CHAT_MESSAGES,
        payload: []
    });
}

// SEND MESSAGE
export const sendMessage = (message, username) => dispatch => {
    console.log('action: ', username);
    dispatch({
        type: SEND_MESSAGE,
        username: username,
        payload: message
    })
}

// JOIN CHAT
export const joinChat = (username) => dispatch => {
    dispatch({
        type: JOIN_CHAT,
        payload: true,
        username: username,
        socket: "http://127.0.0.1:4000"
    });
}
