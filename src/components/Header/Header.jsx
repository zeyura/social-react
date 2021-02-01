import React from 'react'
import Class from "./Header.module.css"
import {NavLink} from "react-router-dom"


function Header(props) {
  return (
    <header className={Class.header}>
      <div className={Class.headerInner}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5hhSvG4iCtsjnMOMTE0X2NXNSLGHU_GcZQ&usqp=CAU"
          alt=""
          className={Class.logo}
        />

         <div className={Class.loginBlock} >
             {
                 props.logged ? props.login :
                     <NavLink to={'/login'}>login</NavLink>
             }

         </div>
      </div>
    </header>
  )
}

export default Header