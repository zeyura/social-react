import Class from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

import React from "react"
//import { updateNewMessageCreator, sendMessageCreator } from "../../redux/dialogsReducer"

function Dialogs({ data, updateNewMessage, sendMessage }) {

  const dialogsElems = data.dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))
  const messagesElems = data.messagesData.map((m, i) => (
    <Message key={i} data={m} />
  ))
  let newMessageValue = data.newMessageBody
  
  ///////////

  let newMessageText = React.createRef()

  ///////
  const changeNewMessage = (e) => {
    let body = e.target.value
    updateNewMessage(body)
  }

  const addMessage = () => {
    if (newMessageText.current.value) sendMessage()
  }

  return (
    <div className={Class.wrapper}>
      <h1>Messages</h1>

      <div className={Class.messagesContent}>
        <div className={Class.dialogs}>{dialogsElems}</div>
        <div className={Class.messages}>
          <div>{messagesElems}</div>
          <div>
            <div className={Class.addPost}>
              <h3>---</h3>
              <form>
                <div className="inputField">
                  <textarea
                    value={newMessageValue}
                    ref={newMessageText}
                    onChange={changeNewMessage}
                    className={Class.inputText}
                    cols="50"
                    rows="2"
                  />
                </div>
                <button type="button" onClick={addMessage}>
                  Add Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs