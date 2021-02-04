import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isLogged: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isLogged: true
            }

        default:
            return state
    }

}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login} })

export const SET_AUTH_USER = () => {
    return (dispatch) => {
        authAPI.getAuthMe()
            .then(
                data => {
                    if(data.resultCode === 0) {
                        dispatch(setAuthUserData(data.id, data.email, data.login))
                    }
                }
            )
    }
}

export default authReducer