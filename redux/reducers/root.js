const initialState = {
    user: null,
    error: null
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case "LOGIN_SUCCESS":
            return{
                ...state,
                user: action.payload
            }
        case "LOGIN_FAILURE":
            return{
                ...state,
                error: action.payload
            }
        case "REGISTER_FAILURE":
            return{
                ...state,
                error: action.payload
            }
        case "SAVE_USER_SUCCESS":
            return{
                ...state,
                user: action.payload
            }
        case "SAVE_USER_FAILURE":
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;