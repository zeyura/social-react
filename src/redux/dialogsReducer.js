

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SET_MESSAGE = 'SET_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yohh'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: ">>"
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:
            return {
              ...state,
              newMessageBody: action.body
            }
       case SET_MESSAGE:
           let message = action.message
           let newId = state.messages.length + 1
           return {
            ...state,
            newMessageBody: '>>',
            messages: [...state.messages, {id: newId, message}]
          }
       default:
           return state;
   }
}

export const setMessage = (message) => ({type: SET_MESSAGE, message})



export const SEND_MESSAGE = (message) => {
    return (dispatch) => {
        dispatch(setMessage(message))
        // profileAPI.updateStatus(message)
        //     .then(
        //         response => {
        //
        //             if(response.data.resultCode === 0) {
        //                 dispatch(setStatus(message))
        //             } else {
        //                 //
        //             }
        //         }
        //     )
    }
}


export default dialogsReducer;