import Class from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

function Dialogs(props) {
  const dialogsData = [
    { name: "Gosha", id: "1" },
    { name: "Masha", id: "2" },
    { name: "Sveta", id: "3" },
    { name: "Vasiliy", id: "4" },
    { name: "Ostapko", id: "5" },
    { name: "Alexander", id: "6" },
  ]

  const messagesData = [
    { message: "Hello!" },
    { message: "Fucking USA" },
    { message: "Bellowed users Slippy.." },
    { message: "Bellowed users Sonnyes Meassures doom..." },
  ]

  // ------------------

  const dialogsElems = dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))
  const messagesElems = messagesData.map((m, i) => (
    <Message key={i} message={m.message} />
  ))

  ///////////

  return (
    <div className={Class.wrapper}>
      <h1>Messages</h1>

      <div className={Class.messagesContent}>
        <div className={Class.dialogsItems}>{dialogsElems}</div>
        <div className={Class.messages}>{messagesElems}</div>
      </div>
    </div>
  )
}

export default Dialogs
