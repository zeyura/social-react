//import { NavLink } from "react-router-dom"
import Class from "../Sidebar.module.css"

function Friends({ data }) {
  let frendsElems = data.map((f) => (
    <li key={f.id} className={Class.friendItem}>
      <img src={`img/${f.url}.jpg`} alt={f.name} />
      <span className={Class.name}>{f.name}</span>
    </li>
  ))

  return <ul className={Class.friends}>{frendsElems}</ul>
}

export default Friends
