import Class from "../Dialogs.module.css"

const Message = ({ data }) => {
  let selfClass = ""
  if (data.self) selfClass = "selfMessage"
  return (
    <div className={`${Class.messageWrap} ${selfClass}`}>
      <div className={`${Class.message}`}>
        <img src={`/img/${data.url}.jpg`} alt="" />
        <div className={Class.text}>{data.message}</div>
      </div>
    </div>
  )
}

export default Message
