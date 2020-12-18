const ADD_POST = "ADD_POST"

const profileReducer = (state, action) => {
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: action.post,
                likesCount: 0,
            }
            state.posts.push(newPost)
            return state
        default:
            return state
    }

}

export const addPostCreator = (text) => {
    return {
      type: ADD_POST,
      post: text,
    }
}


export default profileReducer