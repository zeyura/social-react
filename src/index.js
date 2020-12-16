import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

// ----- DATA
const posts = [
  { text: "Hello!!", likesCount: "35" },
  { text: "Sam Hullo!!", likesCount: "45" },
  { text: "Poxxxues", likesCount: "345" },
  { text: "Pokedova babanya!", likesCount: "5" },
]

const dialogsData = [
  { name: "Gosha", id: "1" },
  { name: "Masha", id: "2" },
  { name: "Sveta", id: "3" },
  { name: "Vasiliy", id: "4" },
  { name: "Ostapko", id: "5" },
  { name: "Alexander", id: "6" },
]

const messagesData = [
  { message: "Hello!" },
  { message: "Fucking USA" },
  { message: "Bellowed users Slippy.." },
  { message: "Bellowed users Sonnyes Meassures doom..." },
]

// DATA END

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
