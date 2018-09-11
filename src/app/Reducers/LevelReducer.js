import { SET_LEVEL } from "../Actions/TYPES";

export default function Level(state = 1, action) {
    switch (action.type) {
        case SET_LEVEL:
            return action.level;
        default:
            return state;
    }
}
