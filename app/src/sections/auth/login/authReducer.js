// auth.js

const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

export const setAuthStatus = (isLoggedIn, userName) => ({
    type: SET_AUTH_STATUS,
    payload: { isLoggedIn, userName },
});

const initialState = {
    isLoggedIn: false,
    userName: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_STATUS:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                userName: action.payload.userName,
            };
        default:
            return state;
    }
};

export default authReducer;