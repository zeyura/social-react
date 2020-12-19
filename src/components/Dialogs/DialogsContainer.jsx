import { updateNewMessageCreator, sendMessageCreator } from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"

function DialogsContainer({ data, dispatch }) {
  
  const onChangeNewMessage = (body) => {
    
    dispatch(updateNewMessageCreator(body))
  }

  const onAddMessage = () => {
    dispatch(sendMessageCreator())
  }
  
  return <Dialogs data={data} updateNewMessage={onChangeNewMessage} sendMessage={onAddMessage}  />
}

export default DialogsContainer
