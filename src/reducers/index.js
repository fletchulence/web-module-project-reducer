import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_NUMBER, SET_MEMORY, APPLY_MEM, CLEAR_MEM } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case('+'):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
        console.log('this here')
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
        console.log('this 2 here')

            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
        case(CLEAR_NUMBER):
            return ({
                ...state,
                total: 0
            });

        case(SET_MEMORY):
            return ({
                ...state,
                memory: state.total
            });

        case(APPLY_MEM):
            return ({
                ...state,
                total: state.memory
            });

        case(CLEAR_MEM):
            return ({
                ...state,
                memory: 0
            });
            
        default:
            return state;
    }
}

export default reducer;