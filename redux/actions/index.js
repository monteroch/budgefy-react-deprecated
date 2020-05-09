export const loginRequest = (user) => ({
    type: 'LOGIN_REQUEST',
    payload: user
});

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error
});

export const registerRequest = (user) => ({
    type: 'REGISTER_REQUEST',
    payload: user
});

export const registerSuccess = (user) => ({
    type: 'REGISTER_SUCCESS',
    payload: user
});

export const registerFailure = (error) => ({
    type: 'REGISTER_FAILURE',
    payload: error
});

export const saveUserintoDB = (user) => ({
    type: 'SAVE_USER_REQUEST',
    payload: user
});

export const saveUserSuccess = (user) => ({
    type: 'SAVE_USER_SUCCESS',
    payload: user
});

export const saveUserFailure = (error) => ({
    type: 'SAVE_USER_FAILURE',
    payload: error
});