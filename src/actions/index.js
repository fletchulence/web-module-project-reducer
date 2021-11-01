export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_NUMBER="CLEAR_NUMBER";
export const SET_MEMORY= "SET_MEMORY";
export const APPLY_MEM= "APPLY_MEM";
export const CLEAR_MEM= "CLEAR_MEM";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearAll = () => {
    return({type:CLEAR_NUMBER});
}

export const setMem = (number) => {
    return({type:SET_MEMORY, payload:number});
}

export const applyMem = (memory) => {
    return({type:APPLY_MEM, payload:memory});
}

export const clearMem = (memory) => {
    return({type:CLEAR_MEM});
}