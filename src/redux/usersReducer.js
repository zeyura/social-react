import {usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_LOADER = 'SET_LOADER'
const IS_FOLLOWING_PROGRESS = 'IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    siblingsCount: 2, // колво  соседних показаних страниц..
    isLoading: false,
    followingInProgress: [], // тут будут id кнопок которые щас  фоловятся или унфоловятся - disabled
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users] // psevdo push()
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_LOADER:
            return {
                ...state,
                isLoading: action.loader
            }
        case IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.progress ?
                [...state.followingInProgress, action.userId] : // add userid
                    state.followingInProgress.filter(id => id != action.userId) // remove userId
            }

        default:
            return state
    }

}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export const toggleLoader = (loader) => ({type: SET_LOADER, loader})
export const toggleFollowProgress = (progress, userId) => ({type: IS_FOLLOWING_PROGRESS, progress, userId})

///    Thunks  --------------
//  getUsersThunkCreator ->
export const GET_USERS = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleLoader(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                    dispatch(setUsers(data.items))
                    dispatch(setTotalUsersCount(data.totalCount))
                    dispatch(toggleLoader(false))
                }
            )
    }
}
/// followUserThunkCreator
export const FOLLOW_USER = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowProgress(true, userId))
        usersAPI.followUser(userId)
            .then(
                data => {
                    if(data.resultCode === 0) {
                        dispatch(follow(userId))
                    }
                    dispatch(toggleFollowProgress(false, userId))
                }
            )
    }
}

export const UN_FOLLOW_USER = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowProgress(true, userId))
        usersAPI.unfollowUser(userId)
            .then(
                data => {
                    if(data.resultCode === 0) {
                        dispatch(unfollow(userId))
                    }
                    dispatch(toggleFollowProgress(false, userId))
                }
            )
    }
}


export default usersReducer