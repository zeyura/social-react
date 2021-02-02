import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
  return {
      dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}

let authRedirectComponent = withAuthRedirect(Dialogs) // HOC  withAuthRedirect

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)

export default DialogsContainer;