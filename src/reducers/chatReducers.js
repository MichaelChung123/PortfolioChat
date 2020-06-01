import { GET_CHAT_MESSAGES, SEND_MESSAGE, JOIN_CHAT } from "../actions/types.js";
import socketIOClient from "socket.io-client";

// const ENDPOINT = "http://127.0.0.1:4000";
// let socket = socketIOClient(ENDPOINT);


const initialState = {
    messages: [],
    chatJoined: false,
    username: "",
    socket: socketIOClient('http://localhost:3000')
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHAT_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        case SEND_MESSAGE:   
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case JOIN_CHAT:
            return {
                ...state,
                chatJoined: action.payload,
                username: action.username,
                socket: socketIOClient(action.socket)
            }
        default:
            return state;
    }
}