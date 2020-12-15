import { NavLink } from "react-router-dom"
import Class from "./Sidebar.module.css"

function Sidebar() {
  return (
    <div className={Class.sidebar}>
      <nav>
        <ul className={Class.nav}>
          <li className={Class.li}>
            <NavLink to="/profile" activeClassName={Class.activeLink}>
              Profile
            </NavLink>
          </li>
          <li className={Class.li}>
            <NavLink to="/dialogs" activeClassName={Class.activeLink}>
              Messages
            </NavLink>
          </li>
          <li className={Class.li}>
            <NavLink to="/" activeClassName={Class.activeLink}>
              News
            </NavLink>
          </li>
          <li className={Class.li}>
            <NavLink to="/" activeClassName={Class.activeLink}>
              Music
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
