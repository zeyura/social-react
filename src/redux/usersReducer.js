const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: [
        {id: 1, followed: true, fullname: 'Vasja P', status: 'Boss', location: { country: 'Ukraine', city: 'Kiev' } },
        {id: 2, followed: true, fullname: 'Sasha G', status: 'Boss', location: { country: 'Ukraine', city: 'Kiev' } },
        {id: 3, followed: false, fullname: 'Yura Mo', status: 'Boss', location: { country: 'Ukraine', city: 'Poltava' } },

    ]
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
        case FOLLOW: 
                return {
                    ...state,
                    users: users.map(u => {
                        if( u.id === action.userId ) {
                            return {...u, followed: true}
                        }
                        return u
                    })
                }
        case UNFOLLOW: 
                return {
                    ...state,
                    users: users.map(u => {
                        if( u.id === action.userId ) {
                            return {...u, followed: false}
                        }
                        return u
                    })

                }

        default:
           return state
   }
}

export const followAC   = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})


export default usersReducer