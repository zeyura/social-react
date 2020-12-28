import { React } from "react";

import { updateNewMessageCreator, sendMessageCreator } from "../../../redux/dialogsReducer"
import Dialogs from "./Dialogs"

import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
      messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (body) => {
      dispatch(updateNewMessageCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
