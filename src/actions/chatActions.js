import {
    GET_CHAT_MESSAGES,
    SEND_MESSAGE
} from './types';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4000";
const socket = socketIOClient(ENDPOINT);

// socket.on('message', msg => {
//     sendMessage(msg);
// });

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