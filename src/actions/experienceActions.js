import {
    GET_PROJECTS
} from './types';

// GET CHAT MESSAGES
export const getProjects = () => dispatch => {
    dispatch({
        type: GET_PROJECTS
    });
}
