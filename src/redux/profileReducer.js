const ADD_POST = "ADD_POST"

let initialState = {
    posts: [
        { id: 1, text: "Hello!!", likesCount: "35" },
        { id: 2, text: "Sam Hullo!!", likesCount: "45" },
        { id: 3, text: "Poxxxues", likesCount: "345" },
        { id: 4, text: "Pokedova babanya!", likesCount: "5" },
        {
          id: 5,
          text: "Pokedova sasiska malaya!! Pokedova sasiska -> malaya--",
          likesCount: "15",
        },
      ]
}

const profileReducer = (state = initialState, action) => {
    
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