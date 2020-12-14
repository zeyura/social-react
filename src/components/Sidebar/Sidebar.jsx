import Class from "./Sidebar.module.css"

function Sidebar() {
  return (
    <div className={Class.sidebar}>
      <nav>
        <ul className={Class.nav}>
          <li className={`${Class.li} ${Class.active}`}>
            <a href="/">Profile</a>
          </li>
          <li className={Class.li}>
            <a href="/">Messages</a>
          </li>
          <li className={Class.li}>
            <a href="/">News</a>
          </li>
          <li className={Class.li}>
            <a href="/">Music</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
