import { SET_LEVEL } from "./TYPES";

export function setLevel(level){
    return {
        type: SET_LEVEL,
        level
    }
}