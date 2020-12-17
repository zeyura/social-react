import { NavLink } from "react-router-dom"
import Friends from "./Friends/Friends"
import Class from "./Sidebar.module.css"

function Sidebar({ data }) {
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

      <Friends data={data.friends} />
    </div>
  )
}

export default Sidebar
