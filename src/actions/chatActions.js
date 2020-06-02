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
export const sendMessage = (messageObj) => dispatch => {
    dispatch({
        type: SEND_MESSAGE,
        payload: messageObj
    })
}

// JOIN CHAT
export const joinChat = (username) => dispatch => {
    
    dispatch({
        type: JOIN_CHAT,
        payload: true,
        username: username
    });
}
