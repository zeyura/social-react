import Class from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

function Dialogs({ data }) {
  const dialogsElems = data.dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))
  const messagesElems = data.messagesData.map((m, i) => (
    <Message key={i} data={m} />
  ))

  ///////////

  return (
    <div className={Class.wrapper}>
      <h1>Messages</h1>

      <div className={Class.messagesContent}>
        <div className={Class.dialogs}>{dialogsElems}</div>
        <div className={Class.messages}>{messagesElems}</div>
      </div>
    </div>
  )
}

export default Dialogs
