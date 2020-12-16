import Class from "./Message.module.css"

const Message = (props) => {
  return <div className={Class.message}>{props.message}</div>
}

export default Message
