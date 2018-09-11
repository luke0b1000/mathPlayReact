import { SET_MATH_OPERATION } from "./TYPES";

export function setOperation(mathOperation) {
    return {
        type: SET_MATH_OPERATION,
        mathOperation
    };
}
