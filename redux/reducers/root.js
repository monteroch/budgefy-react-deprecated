const initialState = {
    uid: null
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                uid: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;