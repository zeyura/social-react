import Class from "./Header.module.css"

function Header() {
  return (
    <header className={Class.header}>
      <div className="logo-wrap">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5hhSvG4iCtsjnMOMTE0X2NXNSLGHU_GcZQ&usqp=CAU"
          alt=""
          className={Class.logo}
        />
      </div>
    </header>
  )
}

export default Header
