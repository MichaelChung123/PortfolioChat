import { GET_CHAT_MESSAGES, SEND_MESSAGE } from "../actions/types.js";

const initialState = {
    messages: []
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
        default:
            return state;
    }
}