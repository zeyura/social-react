const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
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

    newMessageBody: ">",
  }

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
    
        case SEND_MESSAGE:
            let body = state.newMessageBody
            ////if (!body) return
            state.newMessageBody = ""
    
            state.messagesData.push({
            id: "8",
            message: body,
            self: true,
            url: "155",
            })
            return state

        default:
            return state
    }

}

export const updateNewMessageCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body,
    }
}
  
export const sendMessageCreator = () => {
    return {
      type: SEND_MESSAGE,
    }
}


export default dialogsReducer