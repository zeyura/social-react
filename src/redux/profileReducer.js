import {profileAPI} from "../API/api";

const SET_POST = 'SET_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE  = 'SET_USER_PROFILE'
const SET_STATUS  = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'DadaBoo', likesCount: 11}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POST:
            let newId = state.posts.length + 1
            let newPost = {
                id: newId,
                message: action.post,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '_'
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}


export const setPost = (post) => ({type: SET_POST, post})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const ADD_POST = (post) => {
    return (dispatch) => {
        dispatch(setPost(post))
        // profileAPI.updateStatus(status)
        //     .then(
        //         response => {
        //
        //             if(response.data.resultCode === 0) {
        //                 dispatch(setStatus(status))
        //             } else {
        //                 //
        //             }
        //         }
        //     )
    }
}

export const GET_USER_PROFILE = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(
                data => {
                    dispatch(setUserProfile(data))
                }
            )
    }
}

export const GET_STATUS = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(
                data => {
                    dispatch(setStatus(data))
                }
            )
    }
}

export const UPDATE_STATUS = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(
                response => {

                    if(response.data.resultCode === 0) {
                        dispatch(setStatus(status))
                    } else {
                        //
                    }
                }
            )
    }
}


export default profileReducer;