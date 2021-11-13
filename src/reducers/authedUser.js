import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from "../actions/authedUser"

const authedUser = (id = null, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.payload;
        case REMOVE_AUTHED_USER:
            return action.payload;
        default:
            return id;
    }
}

export default authedUser;