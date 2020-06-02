import { GET_CHAT_MESSAGES, SEND_MESSAGE, JOIN_CHAT } from "../actions/types.js";
import socketIOClient from "socket.io-client";

const initialState = {
    messages: [],
    chatJoined: false,
    username: "",
    socket: socketIOClient("http://127.0.0.1:4000"),
    users: []
}

console.log("socket connected : ", initialState.socket)

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHAT_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        case SEND_MESSAGE:
            console.log('reducer: ', action.payload.username);
            return {
                ...state,
                username: action.payload.username,
                messages: [...state.messages, action.payload]
            }
        case JOIN_CHAT:
            return {
                ...state,
                chatJoined: action.payload,
                username: action.username,
                socket: state.socket
            }
        default:
            return state;
    }
}