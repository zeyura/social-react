let store = {
  _state: {
    sidebar: {
      friends: [
        { id: "1", name: "Gosha", url: "155" },
        { id: "2", name: "Masha", url: "155" },
        { id: "3", name: "Sveta", url: "155" },
        { id: "4", name: "Vasiliyska", url: "129" },
        { id: "9", name: "Anatoliy", url: "129" },
      ],
    },

    profilePage: {
      posts: [
        { id: 1, text: "Hello!!", likesCount: "35" },
        { id: 2, text: "Sam Hullo!!", likesCount: "45" },
        { id: 3, text: "Poxxxues", likesCount: "345" },
        { id: 4, text: "Pokedova babanya!", likesCount: "5" },
      ],
    },

    messagesPage: {
      dialogsData: [
        { id: "1", name: "Gosha" },
        { id: "2", name: "Masha" },
        { id: "3", name: "Sveta" },
        { id: "4", name: "Vasiliy" },
        { id: "5", name: "Ostapko" },
        { id: "6", name: "Alexander" },
      ],

      messagesData: [
        { id: "1", message: "Hello!", self: true, url: "155" },
        { id: "2", message: "Fucking USA", self: false, url: "129" },
        {
          id: "3",
          message: "Bellowed users Slippy.. Yeahh! I'm so sonnyyy...",
          self: true,
          url: "155",
        },
        {
          id: "4",
          message:
            "Bellowed users Sonnyes Meassures doom... Disaspers team lider state the bottom shits of dert!!",
          self: false,
          url: "129",
        },
      ],
    },
  },

  _callSubscriber() {
    console.log("Caller!")
  },

  getState() {
    return this._state
  },

  addPost(post) {
    let newPost = {
      id: 5,
      text: post,
      likesCount: 0,
    }

    this._state.profilePage.posts.push(newPost)

    this._callSubscriber(this._state)
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },
}

///
export default store
