import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import "./index.css"
import App from "./App"
// import { addPost } from "./redux/state"

import store from "./redux/redux-store"

let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  )
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
