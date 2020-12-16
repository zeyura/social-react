import Class from "../Dialogs.module.css"
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id

  return (
    <div className={Class.dialog + " " + Class.active}>
      <NavLink to={path} activeClassName={Class.activeLink}>
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem
