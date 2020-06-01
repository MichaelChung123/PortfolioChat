import { GET_SOCKET } from "../actions/types.js";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4000";
let socket = socketIOClient(ENDPOINT);

const initialState = {
    socket
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SOCKET:
            return state;
            // return {
            //     ...state,
            //     socket: action.payload
            // }
        default:
            return state;
    }
}