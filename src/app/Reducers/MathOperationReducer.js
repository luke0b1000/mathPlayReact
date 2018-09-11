import { SET_MATH_OPERATION } from "../Actions/TYPES";

export default function MathOperationReducer(state = "random", action) {
    switch (action.type) {
        case SET_MATH_OPERATION:
            return action.mathOperation;
        default:
            return state;
    }
}
