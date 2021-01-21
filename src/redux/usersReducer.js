const FOLLOW    = 'FOLLOW'
const UNFOLLOW  = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const SET_LOADER = 'SET_LOADER'


let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    siblingsCount: 2, // колво  соседних показаних страниц..
    isLoading: false
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if( u.id === action.userId ) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, 
                users: [ ...action.users ] // psevdo push()          
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

        default:
            return state
    }

}

export const followAC   = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users)  => ({type: SET_USERS, users})

export const currentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const totalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export const loaderAC  = (loader) => ({type: SET_LOADER, loader})



export default usersReducer