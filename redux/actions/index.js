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