const FOLLOW    = 'FOLLOW'
const UNFOLLOW  = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        // {id: 1, followed: true, fullname: 'Vasja P', status: 'Boss', location: { country: 'Ukraine', city: 'Kiev' } },
        // {id: 2, followed: true, fullname: 'Sasha G', status: 'Boss', location: { country: 'Ukraine', city: 'Kiev' } },
        // {id: 3, followed: false, fullname: 'Yura Mo', status: 'Boss', location: { country: 'Ukraine', city: 'Poltava' } },

    ]
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if( u.id === action.userId ) {
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
                users: [ ...state.users, ...action.users ]                
            }

        default:
            return state
   }
}

export const followAC   = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const SetUsersAC = () => ({type: SET_USERS})

export default usersReducer